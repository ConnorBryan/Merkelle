'use strict';

var _redux = require('redux');

var _handlers = require('./handlers');

var _handlers2 = _interopRequireDefault(_handlers);

var _actionCreators = require('./actionCreators');

var _actionCreators2 = _interopRequireDefault(_actionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  mostRecentEntity: null,
  entitiesById: []
};


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return _handlers2.default[action.type] ? _handlers2.default[action.type](state, action) : state;
};

var store = (0, _redux.createStore)(reducer);

store.dispatch(_actionCreators2.default.generateAdventurer());

console.log(store.getState());