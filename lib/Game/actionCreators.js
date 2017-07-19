'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _Adventurer = require('./Adventurer');

var _Adventurer2 = _interopRequireDefault(_Adventurer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GENERATE_ADVENTURER = _actionTypes2.default.GENERATE_ADVENTURER;


var ACTION_CREATORS = {
  generateAdventurer: function generateAdventurer() {
    return {
      type: GENERATE_ADVENTURER,
      payload: { adventurer: new _Adventurer2.default() }
    };
  }
};

exports.default = ACTION_CREATORS;