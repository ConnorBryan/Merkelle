/* @flow */
/**
 * Merkelle
 *    by Connor Bryan
 */
import P2P from './P2P';
import type { P2PConfig } from './P2P/types';

const P2P_PORT: number = parseInt(process.env.P2P_PORT) || 6001;
const PEERS: Array<string> = process.env.PEERS
  ? process.env.PEERS.split(',')
  : [];
const P2P_CONFIG: P2PConfig = { port: P2P_PORT, peers: PEERS };

const p2p: P2P = new P2P({ port: P2P_PORT, peers: PEERS });

p2p.initializeServer();