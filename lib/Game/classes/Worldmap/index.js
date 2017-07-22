'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Dungeon = require('./Tile/Dungeon');

var _Dungeon2 = _interopRequireDefault(_Dungeon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHANCE = new _chance2.default();

var Worldmap = function () {
  function Worldmap() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    _classCallCheck(this, Worldmap);

    this.rows = rows;
    this.columns = columns;
    this.grid = [];

    this.generateTiles();
    this.generateDungeon();
  }

  _createClass(Worldmap, [{
    key: 'generateTiles',
    value: function generateTiles() {
      for (var y = 0; y < this.rows; y++) {
        var row = [];
        for (var x = 0; x < this.columns; x++) {
          var coordinates = { y: y, x: x };
          var terrain = _Tile2.default.generateTerrain();

          row.push(new _Tile2.default(coordinates, terrain));
        }
        this.grid.push(row);
      }
    }
  }, {
    key: 'generateDungeon',
    value: function generateDungeon() {
      var row = CHANCE.integer({ min: 0, max: this.rows - 1 });
      var column = CHANCE.integer({ min: 0, max: this.columns - 1 });

      this.grid[row][column] = new _Dungeon2.default({ row: row, column: column });
    }
  }]);

  return Worldmap;
}();

exports.default = Worldmap;