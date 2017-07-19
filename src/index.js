/* @flow */
/**
 * Merkelle
 *    by Connor Bryan
 */
import P2P from './P2P';
import HTTP from './HTTP';
import type { P2PConfig } from './P2P/types';
import type { HTTPConfig } from './HTTP/types';
import Blockchain from './Blockchain';

const BLOCKCHAIN = new Blockchain();

const P2P_PORT: number = parseInt(process.env.P2P_PORT) || 6001;
const PEERS: Array<string> = process.env.PEERS ? process.env.PEERS.split(',') : [];
const P2P_CONFIG: P2PConfig = { port: P2P_PORT, peers: PEERS, chain: BLOCKCHAIN };
const p2p: P2P = new P2P(P2P_CONFIG);

const HTTP_PORT:number = parseInt(process.env.HTTP_PORT) || 3001;
const HTTP_CONFIG: HTTPConfig = { port: HTTP_PORT, p2p };
const http: HTTP = new HTTP(HTTP_CONFIG);

p2p.initializeServer();
http.initializeServer();