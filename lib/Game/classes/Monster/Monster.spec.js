'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('(Monster)', function () {
  it('should generate a random CR 1/8 monster given no parameters', function () {
    var monster = new _index2.default();
    (0, _chai.expect)(monster).to.be.instanceof(_index2.default);
    (0, _chai.expect)(monster.name).to.be.a('string');
    (0, _chai.expect)(monster.actions).to.be.an('array');
    (0, _chai.expect)(monster.attributes).to.be.an('object');
    (0, _chai.expect)(monster.attributes.challengeRating).to.equal('ONE EIGHTH');
  });

  it('should generate the correct monster given a name parameter', function () {
    var monster = new _index2.default('Kobold');
    (0, _chai.expect)(monster.name).to.equal('Kobold');
  });

  it('should throw an error if given an invalid name parameter', function () {
    var monster = new _index2.default('mother in law');
    (0, _chai.expect)(monster).to.throw();
  });
});