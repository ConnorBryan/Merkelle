'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var P2P = function () {
  function P2P(config) {
    _classCallCheck(this, P2P);

    var port = config.port,
        peers = config.peers;

    this.port = port;
    this.peers = peers;
    this.server = null;
    this.sockets = [];
  }

  _createClass(P2P, [{
    key: 'log',
    value: function log(message) {
      console.info(message);
    }
  }, {
    key: 'initializeServer',
    value: function initializeServer() {
      var _this = this;

      this.server = new _ws2.default.Server({ port: this.port });
      this.server.on('connection', function (socket) {
        return _this.initializeConnection(socket);
      });
      this.connectToPeers();
      this.log(_constants2.default.INITIALIZED_SERVER(this.port));
    }
  }, {
    key: 'initializeConnection',
    value: function initializeConnection(socket) {
      var _this2 = this;

      this.sockets.push(socket);
      socket.on('error', function () {
        return _this2.closeConnection(socket);
      });
      socket.on('close', function () {
        return _this2.closeConnection(socket);
      });
      this.log(_constants2.default.INITIALIZED_CONNECTION_WITH_SOCKET(socket));
    }
  }, {
    key: 'connectToPeers',
    value: function connectToPeers() {
      var _this3 = this;

      this.peers.forEach(function (peer) {
        try {
          var socket = new _ws2.default(peer);
          socket.on('open', function () {
            return _this3.initializeConnection(socket);
          });
          socket.on('error', function () {
            return _this3.log(_constants2.default.UNABLE_TO_CONNECT_TO_PEER(socket));
          });
        } catch (e) {
          _this3.log(_constants2.default.INVALID_PEER(peer));
        }
      });
    }
  }, {
    key: 'closeConnection',
    value: function closeConnection(socket) {
      this.sockets.splice(this.sockets.indexOf(socket), 1);
      this.log(_constants2.default.CLOSED_CONNECTION_WITH_SOCKET(socket));
    }
  }]);

  return P2P;
}();

exports.default = P2P;