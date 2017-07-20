'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _Entity2 = require('../Entity');

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var ABILITY_SCORES = CONSTANTS.ABILITY_SCORES,
    ENTITY_TYPES = CONSTANTS.ENTITY_TYPES;

var CHANCE = new _chance2.default();

var Adventurer = function (_Entity) {
  _inherits(Adventurer, _Entity);

  function Adventurer() {
    _classCallCheck(this, Adventurer);

    var _this = _possibleConstructorReturn(this, (Adventurer.__proto__ || Object.getPrototypeOf(Adventurer)).call(this, ENTITY_TYPES.ADVENTURER));

    _this.abilityScores = _this.generateAbilityScores();
    return _this;
  }

  _createClass(Adventurer, [{
    key: 'rollDie',
    value: function rollDie(max) {
      return CHANCE.integer({ min: 1, max: max });
    }
  }, {
    key: 'generateStat',
    value: function generateStat() {
      var rolls = [];

      for (var i = 0; i < 4; i++) {
        rolls.push(this.rollDie(6));
      }

      var lowest = 6;

      rolls.forEach(function (roll) {
        return roll < lowest && (lowest = roll);
      });

      return rolls.filter(function (roll) {
        return roll !== lowest;
      }).reduce(function (acc, cur) {
        return acc += cur;
      }, 0);
    }
  }, {
    key: 'generateAbilityScores',
    value: function generateAbilityScores() {
      var _this2 = this;

      return ABILITY_SCORES.reduce(function (acc, cur) {
        acc[cur] = _this2.generateStat();
        return acc;
      }, {});
    }
  }]);

  return Adventurer;
}(_Entity3.default);

exports.default = Adventurer;