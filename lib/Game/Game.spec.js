'use strict';

var _chai = require('chai');

var _redux = require('redux');

var _actionCreators = require('./actionCreators');

var _actionCreators2 = _interopRequireDefault(_actionCreators);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _Adventurer = require('./Adventurer');

var _Adventurer2 = _interopRequireDefault(_Adventurer);

var _Monster = require('./Monster');

var _Monster2 = _interopRequireDefault(_Monster);

var _constants = require('./Entity/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateAdventurer = _actionCreators2.default.generateAdventurer,
    generateMonster = _actionCreators2.default.generateMonster;
var ABILITY_SCORES = _constants2.default.ABILITY_SCORES;


describe('(Game)', function () {
  var store = void 0;

  beforeEach(function () {
    return store = (0, _redux.createStore)(_index2.default);
  });

  describe('> Generate Adventurer', function () {
    it('should create a valid adventurer', function () {
      store.dispatch(generateAdventurer());

      var _store$getState = store.getState(),
          entitiesById = _store$getState.entitiesById;

      var adventurer = entitiesById[0];

      (0, _chai.expect)(adventurer).to.exist;
      (0, _chai.expect)(adventurer).to.be.an.instanceof(_Adventurer2.default);

      ABILITY_SCORES.forEach(function (abilityScore) {
        var score = adventurer.abilityScores[abilityScore];
        (0, _chai.expect)(score).to.be.a('number');
        (0, _chai.expect)(score).to.be.gt(0);
        (0, _chai.expect)(score).to.be.lt(19);
      });
    });
  });

  describe('> Generate Monster', function () {
    it('should create a valid monster', function () {
      store.dispatch(generateMonster());

      var _store$getState2 = store.getState(),
          entitiesById = _store$getState2.entitiesById;

      var monster = entitiesById[0];

      (0, _chai.expect)(monster).to.exist;
      (0, _chai.expect)(monster).to.be.an.instanceof(_Monster2.default);

      ABILITY_SCORES.forEach(function (abilityScore) {
        var score = monster.abilityScores[abilityScore];
        (0, _chai.expect)(score).to.be.a('number');
        (0, _chai.expect)(score).to.be.gt(0);
        (0, _chai.expect)(score).to.be.lt(19);
      });
    });
  });
});