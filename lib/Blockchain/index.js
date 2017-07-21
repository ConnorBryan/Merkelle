'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _Game = require('../Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var store = _Game2.default.store,
    tick = _Game2.default.tick;

var Block = exports.Block = function Block(blockConfig) {
  _classCallCheck(this, Block);

  var index = blockConfig.index,
      hash = blockConfig.hash,
      previousHash = blockConfig.previousHash,
      timestamp = blockConfig.timestamp,
      data = blockConfig.data;

  this.index = index;
  this.hash = hash;
  this.previousHash = previousHash;
  this.timestamp = timestamp;
  this.data = data;
};

var Blockchain = function Blockchain() {
  var _this = this;

  _classCallCheck(this, Blockchain);

  this.getGenesisBlock = function () {
    return new Block({
      index: 0,
      hash: 'merkelle',
      previousHash: '0',
      timestamp: 1234567890,
      data: JSON.stringify(_this.store.getState())
    });
  };

  this.getMostRecentBlock = function () {
    return _this.chain[_this.chain.length - 1];
  };

  this.calculateHash = function (index, previousHash, timestamp, data) {
    return _cryptoJs2.default.SHA256(index + previousHash + timestamp + data).toString();
  };

  this.calculateHashForBlock = function (block) {
    var index = block.index,
        previousHash = block.previousHash,
        timestamp = block.timestamp,
        data = block.data;


    return _this.calculateHash(index, previousHash, timestamp, data);
  };

  this.generateNextBlock = function () {
    _this.store.dispatch(tick());

    var previousBlock = _this.getMostRecentBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimestamp = new Date().getTime() / 1000;
    var nextData = JSON.stringify(_this.store.getState());
    var nextHash = _this.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, nextData);

    return new Block({
      index: nextIndex,
      hash: nextHash,
      previousHash: previousBlock.hash,
      timestamp: nextTimestamp,
      data: nextData
    });
  };

  this.addBlock = function () {
    var block = _this.generateNextBlock();

    if (_this.isValidNewBlock(block, _this.getMostRecentBlock())) {
      _this.chain.push(block);
    }
  };

  this.isValidNewBlock = function (block, previousBlock) {
    if (previousBlock.index + 1 !== block.index) return false;
    if (previousBlock.hash !== block.previousHash) return false;
    if (_this.calculateHashForBlock(block) !== block.hash) return false;
    return true;
  };

  this.isValidChain = function (chain) {
    var genesisBlock = JSON.stringify(_this.getGenesisBlock({}));
    var temporaryChain = [_this.chain[0]];
    var isInvalidGenesisBlock = JSON.stringify(_this.chain[0] !== genesisBlock);

    if (isInvalidGenesisBlock) return false;

    for (var i = 0; i < chain.length; i++) {
      var currentBlock = chain[i];
      var previousBlock = temporaryChain[i - 1];
      var isValid = _this.isValidNewBlock(currentBlock, previousBlock);

      if (!isValid) return false;

      temporaryChain.push(currentBlock);
    }

    return true;
  };

  this.replaceChain = function (chain) {
    if (_this.isValidChain(chain) && chain.length > _this.chain.length) {
      _this.chain = chain;
    }
  };

  this.store = store;
  this.chain = [this.getGenesisBlock()];
};

exports.default = Blockchain;