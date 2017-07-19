'use strict';

var _P2P = require('./P2P');

var _P2P2 = _interopRequireDefault(_P2P);

var _Blockchain = require('./Blockchain');

var _Blockchain2 = _interopRequireDefault(_Blockchain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merkelle
 *    by Connor Bryan
 */
var P2P_PORT = parseInt(process.env.P2P_PORT) || 6001;
var PEERS = process.env.PEERS ? process.env.PEERS.split(',') : [];
var P2P_CONFIG = { port: P2P_PORT, peers: PEERS };
var p2p = new _P2P2.default({ port: P2P_PORT, peers: PEERS });