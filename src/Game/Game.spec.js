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
});