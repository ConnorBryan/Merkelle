/* @flow */
import type { Action } from './types';
import ACTION_TYPES from './actionTypes';
import Adventurer from './Adventurer';
import Monster from './Monster';

const {
  GENERATE_ENTITY,
}: Object = ACTION_TYPES;

const ACTION_CREATORS: Object = {
  generateAdventurer: (): Action => ({
    type: GENERATE_ENTITY,
    payload: { entity: new Adventurer() }
  }),
  generateMonster: (): Action => ({
    type: GENERATE_ENTITY,
    payload: { entity: new Monster() }
  }),
};

export default ACTION_CREATORS;