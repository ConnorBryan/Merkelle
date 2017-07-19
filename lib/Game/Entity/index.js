'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ABILITY_SCORES = _constants2.default.ABILITY_SCORES;

var CHANCE = new _chance2.default();

var Entity = function () {
  function Entity(type) {
    var abilityScores = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.generateAbilityScores();

    _classCallCheck(this, Entity);

    this.id = null;
    this.type = type;
    this.abilityScores = abilityScores;
  }

  _createClass(Entity, [{
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
      var _this = this;

      return ABILITY_SCORES.reduce(function (acc, cur) {
        acc[cur] = _this.generateStat();
        return acc;
      }, {});
    }
  }]);

  return Entity;
}();

exports.default = Entity;