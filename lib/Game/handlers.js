'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var GENERATE_ADVENTURER = _actionTypes2.default.GENERATE_ADVENTURER;


var HANDLERS = _defineProperty({}, GENERATE_ADVENTURER, function (state, action) {
  var mostRecentEntity = state.mostRecentEntity,
      entitiesById = state.entitiesById;
  var adventurer = action.payload.adventurer;


  if (!mostRecentEntity) {
    adventurer.id = 0;
  } else {
    var id = entitiesById[mostRecentEntity].id;

    adventurer.id = id + 1;
  }

  return _extends({}, state, {
    mostRecentEntity: adventurer.id,
    entitiesById: [].concat(_toConsumableArray(entitiesById), [adventurer])
  });
});

exports.default = HANDLERS;