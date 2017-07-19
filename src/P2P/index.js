/* @flow */
import WebSocket from 'ws';
import Blockchain, { Block } from '../Blockchain';
import constants from './constants';
import type { P2PConfig, SocketMessage } from './types';
import MessageTypes from './messageTypes';

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
      type: MessageTypes.GREETING,
      data: { content },
    });
  }

  update = (): void => {
    this.broadcast({
      type: MessageTypes.UPDATE,
      data: this.blockchain.chain,
    });
  }

  requestAll = (): void => {
    this.broadcast({
      type: MessageTypes.REQUEST_ALL,
      data: {},
    });
  }

  handleMessage = (message: string, socket: WebSocket): void => {
    message = JSON.parse(message);

    switch (message.type) {
      case MessageTypes.GREETING:
        this.log(constants.GREETING(message.data.content));
        break;
      case MessageTypes.UPDATE:
        this.handleUpdate(message.data);
        break;
      default:
        this.log(constants.RECEIVED_INVALID_MESSAGE(message));
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
      this.log(constants.BLOCKCHAIN_IS_BEHIND);

      if (hashesMatch) {
        this.log(constants.HASHES_MATCH);

        this.blockchain.chain.push(mostRecentBlockReceived);
        
        this.broadcast({
          type: MessageTypes.UPDATE,
          data: [this.blockchain.getMostRecentBlock()],
        });
      }
      else if (receivedSingleBlock) {
        this.log(constants.REQUESTING_UPDATED_BLOCKCHAIN);
        this.requestAll();
      }
      else {
        this.log(constants.REPLACING_ENTIRE_BLOCKCHAIN);
        this.blockchain.chain = chain;
      }
    }
    else {
      this.log(constants.UP_TO_DATE);
    }
  }

  initializeServer(): void {
    this.server = new WebSocket.Server({ port: this.port });
    this.server.on('connection', (socket: WebSocket) => this.initializeConnection(socket));
    this.connectToPeers();
    this.log(constants.INITIALIZED_SERVER(this.port));
  }

  initializeConnection(socket: WebSocket): void {
    this.sockets.push(socket);
    socket.on('message', message => this.handleMessage(message, socket));
    socket.on('error', () => this.closeConnection(socket));
    socket.on('close', () => this.closeConnection(socket));
    this.log(constants.INITIALIZED_CONNECTION_WITH_SOCKET(socket));
  }

  connectToPeers(peers: Array<string> = []): void {
    peers = [...peers, ...this.peers];
    peers.forEach(peer => {
      try {
        const socket = new WebSocket(peer);
        socket.on('open', () => this.initializeConnection(socket));
        socket.on('error', () => this.log(constants.UNABLE_TO_CONNECT_TO_PEER(socket)));
      } catch (e) {
        this.log(constants.INVALID_PEER(peer));
      }
    });
  }

  closeConnection(socket: WebSocket): void {
    this.sockets.splice(this.sockets.indexOf(socket), 1);
    this.log(constants.CLOSED_CONNECTION_WITH_SOCKET(socket));
  }

  write(socket: WebSocket, message: SocketMessage): void {
    socket.send(JSON.stringify(message));
  }

  broadcast(message: SocketMessage): void {
    this.sockets.forEach(socket => this.write(socket, message));
  }
}