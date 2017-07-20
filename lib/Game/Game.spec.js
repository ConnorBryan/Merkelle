'use strict';

var _chai = require('chai');

var _redux = require('redux');

var _actionCreators = require('./actionCreators');

var _actionCreators2 = _interopRequireDefault(_actionCreators);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _Adventurer = require('./classes/Adventurer');

var _Adventurer2 = _interopRequireDefault(_Adventurer);

var _Monster = require('./classes/Monster');

var _Monster2 = _interopRequireDefault(_Monster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSTANTS = {
  ABILITY_SCORES: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
  CLASSES: {
    BARBARIAN: 'BARBARIAN',
    BARD: 'BARD',
    CLERIC: 'CLERIC',
    DRUID: 'DRUID',
    FIGHTER: 'FIGHTER',
    MONK: 'MONK',
    PALADIN: 'PALADIN',
    RANGER: 'RANGER',
    ROGUE: 'ROGUE',
    SORCERER: 'SORCERER',
    WARLOCK: 'WARLOCK',
    WIZARD: 'WIZARD'
  },
  RACES: {
    DRAGONBORN: 'DRAGONBORN',
    'HILL DWARF': 'HILL DWARF',
    'MOUNTAIN DWARF': 'MOUNTAIN DWARF',
    'HIGH ELF': 'HIGH ELF',
    'WOOD ELF': 'WOOD ELF',
    DROW: 'DROW',
    'FOREST GNOME': 'FOREST GNOME',
    'ROCK GNOME': 'ROCK GNOME',
    'DEEP GNOME': 'DEEP GNOME',
    'HALF-ELF': 'HALF-ELF',
    'HALF-ORC': 'HALF-ORC',
    HALFLING: 'HALFLING',
    HUMAN: 'HUMAN',
    TIEFLING: 'TIEFLING',
    GENASI: 'GENASI',
    GOLIATH: 'GOLIATH'
  },
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH: 'ONE EIGHTH',
    ONE_FOURTH: 'ONE FOURTH',
    ONE_HALF: 'ONE HALF',
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
    FOUR: 'FOUR',
    FIVE: 'FIVE',
    SIX: 'SIX',
    SEVEN: 'SEVEN',
    EIGHT: 'EIGHT',
    NINE: 'NINE',
    TEN: 'TEN',
    ELEVEN: 'ELEVEN',
    TWELVE: 'TWELVE',
    THIREEN: 'THIRTEEN',
    FOURTEEN: 'FOURTEEN',
    FIFTEEN: 'FIFTEEN',
    SIXTEEN: 'SIXTEEN',
    SEVENTEEN: 'SEVENTEEN',
    EIGHTEEN: 'EIGHTEEN',
    NINETEEN: 'NINETEEN',
    TWENTY: 'TWENTY',
    TWENTY_ONE: 'TWENTY_ONE',
    TWENTY_TWO: 'TWENTY_TWO',
    TWENTY_THREEE: 'TWENTY_THREE',
    TWENTY_FOUR: 'TWENTY_FOUR',
    THIRTY: 'THIRTY'
  },
  ENTITY_TYPES: {
    ADVENTURER: 'ADVENTURER',
    MONSTER: 'MONSTER'
  },
  ERRORS: {
    INVALID_MONSTER_NAME: 'A monster does not exist with the provided name'
  }
};
var generateAdventurer = _actionCreators2.default.generateAdventurer,
    generateMonster = _actionCreators2.default.generateMonster;
var ABILITY_SCORES = CONSTANTS.ABILITY_SCORES;


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