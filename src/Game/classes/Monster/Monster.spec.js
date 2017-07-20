import { expect } from 'chai';
import Monster from './index';

describe('(Monster)', () => {
  it('should generate a random CR 1/8 monster given no parameters', () => {
    const monster = new Monster();
    expect(monster).to.be.instanceof(Monster);
    expect(monster.name).to.be.a('string');
    expect(monster.actions).to.be.an('array');
    expect(monster.attributes).to.be.an('object');
    expect(monster.attributes.challengeRating).to.equal('ONE EIGHTH');
  });

  it('should generate the correct monster given a name parameter', () => {
    const monster = new Monster('Kobold');
    expect(monster.name).to.equal('Kobold');
  });

  it('should throw an error if given an invalid name parameter', () => {
     const monster = new Monster('mother in law');
     expect(monster).to.throw();
  });
});