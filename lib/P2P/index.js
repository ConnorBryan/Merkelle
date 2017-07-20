'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _Blockchain = require('../Blockchain');

var _Blockchain2 = _interopRequireDefault(_Blockchain);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MESSAGE_TYPES = _constants2.default.MESSAGE_TYPES,
    INITIALIZED_SERVER = _constants2.default.INITIALIZED_SERVER,
    INITIALIZED_CONNECTION_WITH_SOCKET = _constants2.default.INITIALIZED_CONNECTION_WITH_SOCKET,
    CLOSED_CONNECTION_WITH_SOCKET = _constants2.default.CLOSED_CONNECTION_WITH_SOCKET,
    UNABLE_TO_CONNECT_TO_PEER = _constants2.default.UNABLE_TO_CONNECT_TO_PEER,
    INVALID_PEER = _constants2.default.INVALID_PEER,
    RECEIVED_INVALID_MESSAGE = _constants2.default.RECEIVED_INVALID_MESSAGE,
    GREETING = _constants2.default.GREETING,
    BLOCKCHAIN_IS_BEHIND = _constants2.default.BLOCKCHAIN_IS_BEHIND,
    HASHES_MATCH = _constants2.default.HASHES_MATCH,
    REQUESTING_UPDATED_BLOCKCHAIN = _constants2.default.REQUESTING_UPDATED_BLOCKCHAIN,
    REPLACING_ENTIRE_BLOCKCHAIN = _constants2.default.REPLACING_ENTIRE_BLOCKCHAIN,
    UP_TO_DATE = _constants2.default.UP_TO_DATE;

var P2P = function () {
  function P2P(config) {
    var _this = this;

    _classCallCheck(this, P2P);

    this.log = function (message) {
      console.info(message);
    };

    this.greet = function (socket, content) {
      _this.write(socket, {
        type: MESSAGE_TYPES.GREETING,
        data: { content: content }
      });
    };

    this.update = function () {
      _this.broadcast({
        type: MESSAGE_TYPES.UPDATE,
        data: _this.blockchain.chain
      });
    };

    this.requestAll = function () {
      _this.broadcast({
        type: MESSAGE_TYPES.REQUEST_ALL,
        data: {}
      });
    };

    this.handleMessage = function (message, socket) {
      message = JSON.parse(message);

      switch (message.type) {
        case MESSAGE_TYPES.GREETING:
          _this.log(GREETING(message.data.content));
          break;
        case MESSAGE_TYPES.UPDATE:
          _this.handleUpdate(message.data);
          break;
        default:
          _this.log(RECEIVED_INVALID_MESSAGE(message));
          break;
      }
    };

    var port = config.port,
        peers = config.peers,
        chain = config.chain;

    this.port = port;
    this.peers = peers;
    this.server = null;
    this.sockets = [];
    this.blockchain = chain;
  }

  _createClass(P2P, [{
    key: 'handleUpdate',
    value: function handleUpdate(chain) {
      var newBlockchain = chain.sort(function (b1, b2) {
        return b1.index - b2.index;
      });
      var mostRecentBlockReceived = newBlockchain[newBlockchain.length - 1];
      var mostRecentBlockHeld = this.blockchain.getMostRecentBlock();
      var blockchainIsBehind = mostRecentBlockReceived.index > mostRecentBlockHeld.index;
      var hashesMatch = mostRecentBlockHeld.hash === mostRecentBlockReceived.previousHash;
      var receivedSingleBlock = newBlockchain.length === 1;

      if (blockchainIsBehind) {
        this.log(BLOCKCHAIN_IS_BEHIND);

        if (hashesMatch) {
          this.log(HASHES_MATCH);

          this.blockchain.chain.push(mostRecentBlockReceived);

          this.broadcast({
            type: MESSAGE_TYPES.UPDATE,
            data: [this.blockchain.getMostRecentBlock()]
          });
        } else if (receivedSingleBlock) {
          this.log(REQUESTING_UPDATED_BLOCKCHAIN);
          this.requestAll();
        } else {
          this.log(REPLACING_ENTIRE_BLOCKCHAIN);
          this.blockchain.chain = chain;
        }
      } else {
        this.log(UP_TO_DATE);
      }
    }
  }, {
    key: 'initializeServer',
    value: function initializeServer() {
      var _this2 = this;

      this.server = new _ws2.default.Server({ port: this.port });
      this.server.on('connection', function (socket) {
        return _this2.initializeConnection(socket);
      });
      this.connectToPeers();
      this.log(INITIALIZED_SERVER(this.port));
    }
  }, {
    key: 'initializeConnection',
    value: function initializeConnection(socket) {
      var _this3 = this;

      this.sockets.push(socket);
      socket.on('message', function (message) {
        return _this3.handleMessage(message, socket);
      });
      socket.on('error', function () {
        return _this3.closeConnection(socket);
      });
      socket.on('close', function () {
        return _this3.closeConnection(socket);
      });
      this.log(INITIALIZED_CONNECTION_WITH_SOCKET(socket));
    }
  }, {
    key: 'connectToPeers',
    value: function connectToPeers() {
      var _this4 = this;

      var peers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      peers = [].concat(_toConsumableArray(peers), _toConsumableArray(this.peers));
      peers.forEach(function (peer) {
        try {
          var socket = new _ws2.default(peer);
          socket.on('open', function () {
            return _this4.initializeConnection(socket);
          });
          socket.on('error', function () {
            return _this4.log(UNABLE_TO_CONNECT_TO_PEER(socket));
          });
        } catch (e) {
          _this4.log(INVALID_PEER(peer));
        }
      });
    }
  }, {
    key: 'closeConnection',
    value: function closeConnection(socket) {
      this.sockets.splice(this.sockets.indexOf(socket), 1);
      this.log(CLOSED_CONNECTION_WITH_SOCKET(socket));
    }
  }, {
    key: 'write',
    value: function write(socket, message) {
      socket.send(JSON.stringify(message));
    }
  }, {
    key: 'broadcast',
    value: function broadcast(message) {
      var _this5 = this;

      this.sockets.forEach(function (socket) {
        return _this5.write(socket, message);
      });
    }
  }]);

  return P2P;
}();

exports.default = P2P;