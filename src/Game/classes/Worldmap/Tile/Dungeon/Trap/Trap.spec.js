import { expect } from 'chai';
import Trap from './index';

describe('(Trap)', () => {
  let trap;

  beforeEach(() => trap = new Trap());
  
  it('should have a name', () => {
    expect(trap.name).to.be.a('string');  
  });

  it('should have a difficulty class', () => {
    expect(trap.difficultyClass).to.be.a('string');  
  });

  it('should have an outcome function', () => {
    expect(trap.outcome).to.be.a('Function');
  });
});