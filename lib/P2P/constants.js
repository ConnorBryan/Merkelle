'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
  MESSAGE_TYPES: {
    GREETING: 'GREETING',
    UPDATE: 'UPDATE',
    REQUEST_ALL: 'REQUEST ALL'
  },
  INITIALIZED_SERVER: function INITIALIZED_SERVER(port) {
    return '> Initialized a new P2P server on port ' + port + '.';
  },
  INITIALIZED_CONNECTION_WITH_SOCKET: function INITIALIZED_CONNECTION_WITH_SOCKET(socket) {
    return socket.url ? '> Initialized a new connection with socket at ' + socket.url + '.' : '> Initialized a new connection with a socket.';
  },
  CLOSED_CONNECTION_WITH_SOCKET: function CLOSED_CONNECTION_WITH_SOCKET(socket) {
    return '> Closed the connection to socket at ' + socket.url + '.';
  },
  UNABLE_TO_CONNECT_TO_PEER: function UNABLE_TO_CONNECT_TO_PEER(socket) {
    return '> Unable to establish a connection to peer at ' + socket.url + '.';
  },
  INVALID_PEER: function INVALID_PEER(peer) {
    return '> Attempted to connect to invalid peer ' + peer + '.';
  },
  RECEIVED_INVALID_MESSAGE: function RECEIVED_INVALID_MESSAGE(message) {
    return '> Received an invalid message: ' + JSON.stringify(message) + '.';
  },
  GREETING: function GREETING(content) {
    return '> Received a greeting: ' + content;
  },
  BLOCKCHAIN_IS_BEHIND: '> Our blockchain seems to be behind. Let\'s update.',
  HASHES_MATCH: '> The hash of the received block seems to be legitimate.',
  REQUESTING_UPDATED_BLOCKCHAIN: '> Our blockchain is way behind. Let\'s update everything.',
  REPLACING_ENTIRE_BLOCKCHAIN: '> Let\'s rebuild our blockchain from scratch.',
  UP_TO_DATE: '> Everything\'s up to date.'
};
exports.default = constants;