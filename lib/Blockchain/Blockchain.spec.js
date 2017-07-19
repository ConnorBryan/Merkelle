'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('(Blockchain)', function () {
  it('should exist', function () {
    var chain = new _index2.default();
    (0, _chai.expect)(chain).to.exist;
  });
});