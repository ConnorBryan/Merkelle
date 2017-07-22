'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('(Trap)', function () {
  var trap = void 0;

  beforeEach(function () {
    return trap = new _index2.default();
  });

  it('should have a name', function () {
    (0, _chai.expect)(trap.name).to.be.a('string');
  });

  it('should have a difficulty class', function () {
    (0, _chai.expect)(trap.difficultyClass).to.be.a('string');
  });

  it('should have an outcome function', function () {
    (0, _chai.expect)(trap.outcome).to.be.a('Function');
  });
});