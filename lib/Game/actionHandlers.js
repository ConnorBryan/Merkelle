'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionCreators = require('./actionCreators');

var _actionCreators2 = _interopRequireDefault(_actionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateAdventurer = _actionCreators2.default.generateAdventurer,
    generateMonster = _actionCreators2.default.generateMonster;


var NOOP = function NOOP() {};

var ACTION_HANDLERS = {
  initializeWorldmap: function initializeWorldmap() {
    return function (dispatch) {
      dispatch(generateAdventurer());
    };
  },
  tick: function tick() {
    return function (dispatch) {
      dispatch(generateMonster());
    };
  }
};

exports.default = ACTION_HANDLERS;