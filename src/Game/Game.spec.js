import { expect } from 'chai';
import { createStore } from 'redux';
import ACTION_CREATORS from './actionCreators';
import reducer from './index';
import Adventurer from './classes/Adventurer';
import Monster from './classes/Monster';
import CONSTANTS from './data/constants.json';

const {
  generateAdventurer,
  generateMonster,
} = ACTION_CREATORS;

const {
  ABILITY_SCORES,
} = CONSTANTS;

describe('(Game)', () => {
  let store;

  beforeEach(() => (store = createStore(reducer)));

  describe('> Generate Adventurer', () => {
    it('should create a valid adventurer', () => {
      store.dispatch(generateAdventurer());
      
      const { entitiesById } = store.getState();
      const adventurer = entitiesById[0];

      expect(adventurer).to.exist;
      expect(adventurer).to.be.an.instanceof(Adventurer);

      ABILITY_SCORES.forEach(abilityScore => {
        const score = adventurer.abilityScores[abilityScore];
        expect(score).to.be.a('number');
        expect(score).to.be.gt(0);
        expect(score).to.be.lt(19);
      });
    });
  });

  describe('> Generate Monster', () => {
    it('should create a valid monster', () => {
      store.dispatch(generateMonster());

      const { entitiesById } = store.getState();
      const monster = entitiesById[0];

      expect(monster).to.exist;
      expect(monster).to.be.an.instanceof(Monster);

      ABILITY_SCORES.forEach(abilityScore => {
        const score = monster.abilityScores[abilityScore];
        expect(score).to.be.a('number');
        expect(score).to.be.gt(0);
        expect(score).to.be.lt(19);
      });
    });
  });
});