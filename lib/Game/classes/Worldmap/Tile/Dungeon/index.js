'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Monster = require('../../../Monster');

var _Monster2 = _interopRequireDefault(_Monster);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Trap = require('./Trap');

var _Trap2 = _interopRequireDefault(_Trap);

var _Encounter = require('./Encounter');

var _Encounter2 = _interopRequireDefault(_Encounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dungeon = function (_Tile) {
  _inherits(Dungeon, _Tile);

  function Dungeon(coordinates) {
    _classCallCheck(this, Dungeon);

    var _this = _possibleConstructorReturn(this, (Dungeon.__proto__ || Object.getPrototypeOf(Dungeon)).call(this, coordinates, 'DUNGEON'));

    _this.randomize();
    return _this;
  }

  _createClass(Dungeon, [{
    key: 'randomize',
    value: function randomize() {
      this.generateTraps();
      this.generateEncounters();
    }
  }, {
    key: 'generateTraps',
    value: function generateTraps() {
      this.traps = [new _Trap2.default('ONE_EIGHTH'), new _Trap2.default('ONE_EIGHTH'), new _Trap2.default('ONE_EIGHTH')];
    }
  }, {
    key: 'generateEncounters',
    value: function generateEncounters() {
      this.easy = new _Encounter2.default('ONE_EIGHTH', 'EASY');
      this.medium = new _Encounter2.default('ONE_EIGHTH', 'MEDIUM');
      this.hard = new _Encounter2.default('ONE_EIGHTH', 'HARD');
    }
  }]);

  return Dungeon;
}(_index2.default);

exports.default = Dungeon;