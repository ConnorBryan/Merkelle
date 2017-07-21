'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('(Worldmap)', function () {
  var worldmap = void 0;

  beforeEach(function () {
    return worldmap = new _index2.default();
  });

  it('should default to a 3x3 grid when supplied no arguments', function () {
    (0, _chai.expect)(worldmap.rows).to.equal(3);
    (0, _chai.expect)(worldmap.columns).to.equal(3);
  });
});