'use strict';

var _chai = require('chai');

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('(Worldmap)', function () {
  var worldmap = void 0;

  beforeEach(function () {
    return worldmap = new _index2.default();
  });

  it('should default to a 5X5 grid when supplied no arguments', function () {
    (0, _chai.expect)(worldmap.rows).to.equal(5);
    (0, _chai.expect)(worldmap.columns).to.equal(5);
  });

  it('should be comprised entirely of Tiles', function () {
    worldmap.grid.forEach(function (row) {
      return row.forEach(function (column) {
        (0, _chai.expect)(column).to.be.instanceof(_Tile2.default);
      });
    });
  });
});