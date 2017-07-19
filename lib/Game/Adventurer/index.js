'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Entity2 = require('../Entity');

var _Entity3 = _interopRequireDefault(_Entity2);

var _types = require('../Entity/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntityTypes = _types2.default.EntityTypes;

var Adventurer = function (_Entity) {
  _inherits(Adventurer, _Entity);

  function Adventurer() {
    _classCallCheck(this, Adventurer);

    return _possibleConstructorReturn(this, (Adventurer.__proto__ || Object.getPrototypeOf(Adventurer)).call(this, EntityTypes.ADVENTURER));
  }

  return Adventurer;
}(_Entity3.default);

exports.default = Adventurer;