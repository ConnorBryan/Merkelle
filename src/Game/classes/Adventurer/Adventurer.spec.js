import { expect } from 'chai';
import CONSTANTS from '../../data/constants.json';
import Adventurer from './index';

const {
  ABILITY_SCORES,
  CLASSES,
  RACES,
  ALIGNMENTS,
  BACKGROUNDS,
} = CONSTANTS;

describe('(Adventurer)', () => {
  let adventurer;

  beforeEach(() => (adventurer = new Adventurer()));

  it('should have a valid name on generation', () => {
    expect(adventurer.name).to.be.a('string');
  });

  it('should have a valid class on generation', () => {
    expect(CLASSES[adventurer.class]).to.exist;
  });

  it('should have a valid background on generation', () => {
    expect(BACKGROUNDS[adventurer.background]).to.exist;
  });

  it('should have a valid race on generation', () => {
    expect(RACES[adventurer.race]).to.exist;
  });

  it('should be a fresh level one', () => {
    expect(adventurer.level).to.equal(1);
    expect(adventurer.experiencePoints).to.equal(0);
  });

  it('should have valid ability scores on generation', () => {
    expect(adventurer.abilityScores).to.have.all.keys(...ABILITY_SCORES);
    Object.keys(adventurer.abilityScores).forEach(key => {
      expect(adventurer.abilityScores[key]).to.be.gt(2);
      expect(adventurer.abilityScores[key]).to.be.lt(19);
    });
  });

  it('should have no inspiration on generation', () => {
    expect(adventurer.inspiration).to.be.false;
  });

  it('should have a base proficiency bonus of two on generation', () => {
    expect(adventurer.proficiencyBonus).to.equal(2);
  });

  it('should have valid saving throws on generation', () => {
    expect(adventurer.savingThrows).to.have.all.keys(...ABILITY_SCORES);
    Object.keys(adventurer.savingThrows).forEach(key => {
      expect(adventurer.savingThrows[key]).to.be.gt(-5);
      expect(adventurer.savingThrows[key]).to.be.lt(5);
    });
  });
});