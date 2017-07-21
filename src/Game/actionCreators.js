/* @flow */
import type { Action } from './types';
import ACTION_TYPES from './actionTypes';
import Worldmap from './classes/Worldmap';
import Adventurer from './classes/Adventurer';
import Monster from './classes/Monster';

const {
  GENERATE_WORLDMAP,
  GENERATE_ENTITY,
}: Object = ACTION_TYPES;

const ACTION_CREATORS: Object = {
  generateWorldmap: (): Action => ({
    type: GENERATE_WORLDMAP,
    payload: { worldmap: new Worldmap() }
  }),
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