'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
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
  }
};
exports.default = constants;