'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _actionHandlers = require('./actionHandlers');

var _actionHandlers2 = _interopRequireDefault(_actionHandlers);

var _handlers = require('./handlers');

var _handlers2 = _interopRequireDefault(_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monsters = [{
  name: 'Kobold',
  actions: [{
    name: 'use dagger',
    attackType: 'MELEE',
    toHit: 4,
    targetCount: 1,
    hit: [4, 2],
    hitType: 'PIERCING'
  }, {
    name: 'use sling',
    attackType: 'RANGED',
    toHit: 4,
    targetCount: 1,
    hit: [4, 2],
    hitType: 'BLUDGEONING'
  }],
  attributes: {
    size: 'SMALL',
    type: 'HUMANOID',
    alignment: 'LAWFUL EVIL',
    armorClass: 12,
    hitpoints: [5, 5],
    abilityScores: {
      STR: 7,
      DEX: 15,
      CON: 9,
      INT: 8,
      WIS: 7,
      CHA: 8
    },
    darkvision: 60,
    challengeRating: 'ONE EIGHTH'
  }
}];
var initializeWorldmap = _actionHandlers2.default.initializeWorldmap,
    tick = _actionHandlers2.default.tick;


var initialState = {
  worldmap: null,
  mostRecentEntity: null,
  entitiesById: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return _handlers2.default[action.type] ? _handlers2.default[action.type](state, action) : state;
};

var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

store.dispatch(initializeWorldmap());

var GAME = { store: store, tick: tick };

exports.default = GAME;