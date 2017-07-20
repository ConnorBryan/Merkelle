/* @flow */
import WebSocket from 'ws';
import Blockchain, { Block } from '../Blockchain';
import CONSTANTS from './constants';
import type { P2PConfig, SocketMessage } from './types';

const {
  MESSAGE_TYPES,
  INITIALIZED_SERVER,
  INITIALIZED_CONNECTION_WITH_SOCKET,
  CLOSED_CONNECTION_WITH_SOCKET,
  UNABLE_TO_CONNECT_TO_PEER,
  INVALID_PEER,
  RECEIVED_INVALID_MESSAGE,
  GREETING,
  BLOCKCHAIN_IS_BEHIND,
  HASHES_MATCH,
  REQUESTING_UPDATED_BLOCKCHAIN,
  REPLACING_ENTIRE_BLOCKCHAIN,
  UP_TO_DATE,
} = CONSTANTS;

export default class P2P {
  port: number;
  peers: Array<string>;
  server: WebSocket.Server;
  sockets: Array<WebSocket>;
  blockchain: Blockchain;

  constructor(config: P2PConfig) {
    const { port, peers, chain } = config;
    this.port = port;
    this.peers = peers;
    this.server = null;
    this.sockets = [];
    this.blockchain = chain;
  }

  log = (message: string): void => {
    console.info(message);
  }

  greet = (socket: WebSocket, content: string): void => {
    this.write(socket, {
      type: MESSAGE_TYPES.GREETING,
      data: { content },
    });
  }

  update = (): void => {
    this.broadcast({
      type: MESSAGE_TYPES.UPDATE,
      data: this.blockchain.chain,
    });
  }

  requestAll = (): void => {
    this.broadcast({
      type: MESSAGE_TYPES.REQUEST_ALL,
      data: {},
    });
  }

  handleMessage = (message: string, socket: WebSocket): void => {
    message = JSON.parse(message);

    switch (message.type) {
      case MESSAGE_TYPES.GREETING:
        this.log(GREETING(message.data.content));
        break;
      case MESSAGE_TYPES.UPDATE:
        this.handleUpdate(message.data);
        break;
      default:
        this.log(RECEIVED_INVALID_MESSAGE(message));
        break;
    }
  }

  handleUpdate(chain: Array<Block>): void {
    const newBlockchain = chain.sort((b1, b2) => (b1.index - b2.index));
    const mostRecentBlockReceived = newBlockchain[newBlockchain.length - 1];
    const mostRecentBlockHeld = this.blockchain.getMostRecentBlock();
    const blockchainIsBehind = mostRecentBlockReceived.index > mostRecentBlockHeld.index;
    const hashesMatch = mostRecentBlockHeld.hash === mostRecentBlockReceived.previousHash;
    const receivedSingleBlock = newBlockchain.length === 1;

    if (blockchainIsBehind) {
      this.log(BLOCKCHAIN_IS_BEHIND);

      if (hashesMatch) {
        this.log(HASHES_MATCH);

        this.blockchain.chain.push(mostRecentBlockReceived);
        
        this.broadcast({
          type: MESSAGE_TYPES.UPDATE,
          data: [this.blockchain.getMostRecentBlock()],
        });
      }
      else if (receivedSingleBlock) {
        this.log(REQUESTING_UPDATED_BLOCKCHAIN);
        this.requestAll();
      }
      else {
        this.log(REPLACING_ENTIRE_BLOCKCHAIN);
        this.blockchain.chain = chain;
      }
    }
    else {
      this.log(UP_TO_DATE);
    }
  }

  initializeServer(): void {
    this.server = new WebSocket.Server({ port: this.port });
    this.server.on('connection', (socket: WebSocket) => this.initializeConnection(socket));
    this.connectToPeers();
    this.log(INITIALIZED_SERVER(this.port));
  }

  initializeConnection(socket: WebSocket): void {
    this.sockets.push(socket);
    socket.on('message', message => this.handleMessage(message, socket));
    socket.on('error', () => this.closeConnection(socket));
    socket.on('close', () => this.closeConnection(socket));
    this.log(INITIALIZED_CONNECTION_WITH_SOCKET(socket));
  }

  connectToPeers(peers: Array<string> = []): void {
    peers = [...peers, ...this.peers];
    peers.forEach(peer => {
      try {
        const socket = new WebSocket(peer);
        socket.on('open', () => this.initializeConnection(socket));
        socket.on('error', () => this.log(UNABLE_TO_CONNECT_TO_PEER(socket)));
      } catch (e) {
        this.log(INVALID_PEER(peer));
      }
    });
  }

  closeConnection(socket: WebSocket): void {
    this.sockets.splice(this.sockets.indexOf(socket), 1);
    this.log(CLOSED_CONNECTION_WITH_SOCKET(socket));
  }

  write(socket: WebSocket, message: SocketMessage): void {
    socket.send(JSON.stringify(message));
  }

  broadcast(message: SocketMessage): void {
    this.sockets.forEach(socket => this.write(socket, message));
  }
}