/* @flow */
import WebSocket from 'ws';
import Express from 'express';
import bodyParser from 'body-parser';
import P2P from '../P2P';
import Blockchain from '../Blockchain';
import type { HTTPConfig } from './types';
import constants from './constants';

export default class HTTP {
  port: number;
  p2p: P2P;
  blockchain: Blockchain;
  server: WebSocket.Server;

  constructor(httpConfig: HTTPConfig) {
    const {
      port,
      p2p,
    } = httpConfig;
    this.port = port;
    this.p2p = p2p;
    this.blockchain = p2p.blockchain;
    this.server = null;
  }

  log = (message: string): void => {
    console.info(message);
  }

  initializeServer(): Express {
    let app = new Express();
    app = this.applyMiddleware(app);
    app = this.configureEndpoints(app);
    this.server = app;
    this.listen();
  }

  applyMiddleware(app: Express): Express {
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use(bodyParser.urlencoded({
      extended: true,
    }));

    app.use(bodyParser.json());

    return app;
  }

  configureEndpoints(app: Express): Express {
    app.get('/blocks', (req, res) => {
      res.send(JSON.stringify(this.blockchain.chain));
    });

    app.get('/peers', (req, res) => {
      res.send(this.p2p.sockets.map(s => `${s._socket.remoteAddress}:${s._socket.remotePort}`));
    });

    app.post('/mineBlock', (req, res) => {
      this.blockchain.addBlock();
      this.p2p.update();
      this.log(constants.ADDED_NEW_BLOCK);
      res.send({ success: true });
    });

    app.post('/addPeer', (req, res) => {
      this.p2p.connectToPeers([req.body.peers]);
      res.send({ success: true });
    });

    return app;
  }

  listen() {
    this.server && this.server.listen(this.port, () => {
      this.log(constants.HTTP_SERVER_LISTENING(this.port));
    });
  }
}