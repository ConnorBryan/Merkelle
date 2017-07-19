'use strict';

var _P2P = require('./P2P');

var _P2P2 = _interopRequireDefault(_P2P);

var _HTTP = require('./HTTP');

var _HTTP2 = _interopRequireDefault(_HTTP);

var _Blockchain = require('./Blockchain');

var _Blockchain2 = _interopRequireDefault(_Blockchain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BLOCKCHAIN = new _Blockchain2.default();
/**
 * Merkelle
 *    by Connor Bryan
 */


var P2P_PORT = parseInt(process.env.P2P_PORT) || 6001;
var PEERS = process.env.PEERS ? process.env.PEERS.split(',') : [];
var P2P_CONFIG = { port: P2P_PORT, peers: PEERS, chain: BLOCKCHAIN };
var p2p = new _P2P2.default(P2P_CONFIG);

var HTTP_PORT = parseInt(process.env.HTTP_PORT) || 3001;
var HTTP_CONFIG = { port: HTTP_PORT, p2p: p2p };
var http = new _HTTP2.default(HTTP_CONFIG);

p2p.initializeServer();
http.initializeServer();