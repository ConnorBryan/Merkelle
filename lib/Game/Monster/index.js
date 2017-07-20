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
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH: 'ONE EIGHTH'
  },
  ENTITY_TYPES: {
    ADVENTURER: 'ADVENTURER',
    MONSTER: 'MONSTER'
  },
  ERRORS: {
    INVALID_MONSTER_COUNT: 'A new monster cannot be created if there are no monsters in the data set.'
  }
};
var MONSTERS = [{
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
var ENTITY_TYPES = CONSTANTS.ENTITY_TYPES,
    ONE_EIGHTH = CONSTANTS.CHALLENGE_RATING_TYPES.ONE_EIGHTH,
    _CONSTANTS$ERRORS = CONSTANTS.ERRORS,
    INVALID_MONSTER_NAME = _CONSTANTS$ERRORS.INVALID_MONSTER_NAME,
    INVALID_MONSTER_COUNT = _CONSTANTS$ERRORS.INVALID_MONSTER_COUNT;

var CHANCE = new _chance2.default();

var Monster = function (_Entity) {
  _inherits(Monster, _Entity);

  function Monster() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var challengeRating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ONE_EIGHTH;

    _classCallCheck(this, Monster);

    var _this = _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).call(this, ENTITY_TYPES.MONSTER));

    if (name) {
      var monster = _this.getDataFor(name);

      if (!monster) throw new Error(INVALID_MONSTER_NAME);

      _this.initializeAs(monster);
    } else {
      _this.randomize(challengeRating);
    }
    return _this;
  }

  _createClass(Monster, [{
    key: 'getDataFor',
    value: function getDataFor(name) {
      return MONSTERS.filter(function (monster) {
        return monster.name === name;
      })[0];
    }
  }, {
    key: 'randomize',
    value: function randomize(challengeRating) {
      var monsterCount = MONSTERS.length;

      if (monsterCount.length === 0) {
        throw new Error(INVALID_MONSTER_COUNT);
      }

      var monster = MONSTERS[CHANCE.integer({ min: 0, max: monsterCount - 1 })];

      while (monster.attributes.challengeRating !== challengeRating) {
        monster = this.randomize(challengeRating);
      }

      // $ForgetFlow
      this.initializeAs(monster);
    }
  }, {
    key: 'initializeAs',
    value: function initializeAs(monster) {
      var name = monster.name,
          actions = monster.actions,
          attributes = monster.attributes;


      this.name = name;
      this.actions = actions;
      this.attributes = attributes;
    }
  }]);

  return Monster;
}(_Entity3.default);

exports.default = Monster;