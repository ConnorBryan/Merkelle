/* @flow */
import WebSocket from 'ws';
import constants from './constants';
import type { P2PConfig, SocketMessage } from './types';
import MessageTypes from './messageTypes';

export default class P2P {
  port: number;
  peers: Array<string>;
  server: WebSocket.Server;
  sockets: Array<WebSocket>;

  constructor(config: P2PConfig) {
    const { port, peers } = config;
    this.port = port;
    this.peers = peers;
    this.server = null;
    this.sockets = [];
  }

  log = (message: string): void => {
    console.info(message);
  }

  handleMessage = (message: string): void => {
    message = JSON.parse(message);

    switch (message.type) {
      case MessageTypes.GREETING:
        this.log(constants.GREETING(message.data.content));
        break;
      default:
        this.log(constants.RECEIVED_INVALID_MESSAGE(message));
        break;
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
    socket.on('message', this.handleMessage);
    socket.on('error', () => this.closeConnection(socket));
    socket.on('close', () => this.closeConnection(socket));
    this.log(constants.INITIALIZED_CONNECTION_WITH_SOCKET(socket));
  }

  connectToPeers(): void {
    this.peers.forEach(peer => {
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