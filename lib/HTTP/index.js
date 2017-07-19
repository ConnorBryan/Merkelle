'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _P2P = require('../P2P');

var _P2P2 = _interopRequireDefault(_P2P);

var _Blockchain = require('../Blockchain');

var _Blockchain2 = _interopRequireDefault(_Blockchain);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTP = function () {
  function HTTP(httpConfig) {
    _classCallCheck(this, HTTP);

    this.log = function (message) {
      console.info(message);
    };

    var port = httpConfig.port,
        p2p = httpConfig.p2p;

    this.port = port;
    this.p2p = p2p;
    this.blockchain = p2p.blockchain;
    this.server = null;
  }

  _createClass(HTTP, [{
    key: 'initializeServer',
    value: function initializeServer() {
      var app = new _express2.default();
      app = this.applyMiddleware(app);
      app = this.configureEndpoints(app);
      this.server = app;
      this.listen();
    }
  }, {
    key: 'applyMiddleware',
    value: function applyMiddleware(app) {
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

      app.use(_bodyParser2.default.urlencoded({
        extended: true
      }));

      app.use(_bodyParser2.default.json());

      return app;
    }
  }, {
    key: 'configureEndpoints',
    value: function configureEndpoints(app) {
      var _this = this;

      app.get('/blocks', function (req, res) {
        res.send(JSON.stringify(_this.blockchain.chain));
      });

      app.get('/peers', function (req, res) {
        res.send(_this.p2p.sockets.map(function (s) {
          return s._socket.remoteAddress + ':' + s._socket.remotePort;
        }));
      });

      app.post('/mineBlock', function (req, res) {
        _this.blockchain.addBlock();
        _this.p2p.update();
        _this.log(_constants2.default.ADDED_NEW_BLOCK);
        res.send({ success: true });
      });

      app.post('/addPeer', function (req, res) {
        _this.p2p.connectToPeers([req.body.peers]);
        res.send({ success: true });
      });

      return app;
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.server && this.server.listen(this.port, function () {
        _this2.log(_constants2.default.HTTP_SERVER_LISTENING(_this2.port));
      });
    }
  }]);

  return HTTP;
}();

exports.default = HTTP;