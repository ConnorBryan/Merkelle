import { expect } from 'chai';
import CONSTANTS from '../../../../../data/constants.json';
import Encounter from './index';

const {
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH,
  },
  STAGE_TYPES: {
    EASY,
  },
} = CONSTANTS;

describe('(Encounter)', () => {
  let encounter;

  beforeEach(() => encounter = new Encounter());
  
  it('should default to as easy as possible', () => {
    expect(encounter.difficultyClass).to.equal(ONE_EIGHTH);
    expect(encounter.stage).to.equal(EASY);
  });
});