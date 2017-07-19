/* @flow */
import type { Action } from './types';
import ACTION_TYPES from './actionTypes';
import Adventurer from './Adventurer';

const {
  GENERATE_ADVENTURER,
}: Object = ACTION_TYPES;

const ACTION_CREATORS: Object = {
  generateAdventurer: (): Action => ({
    type: GENERATE_ADVENTURER,
    payload: { adventurer: new Adventurer() }
  }),
};

export default ACTION_CREATORS;