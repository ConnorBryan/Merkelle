'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _Adventurer = require('./Adventurer');

var _Adventurer2 = _interopRequireDefault(_Adventurer);

var _Monster = require('./Monster');

var _Monster2 = _interopRequireDefault(_Monster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GENERATE_ENTITY = _actionTypes2.default.GENERATE_ENTITY;


var ACTION_CREATORS = {
  generateAdventurer: function generateAdventurer() {
    return {
      type: GENERATE_ENTITY,
      payload: { entity: new _Adventurer2.default() }
    };
  },
  generateMonster: function generateMonster() {
    return {
      type: GENERATE_ENTITY,
      payload: { entity: new _Monster2.default() }
    };
  }
};

exports.default = ACTION_CREATORS;