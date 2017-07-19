/* @flow */
import type { GameState, Action } from './types';
import ACTION_TYPES from './actionTypes';

const {
  GENERATE_ADVENTURER,
}: Object = ACTION_TYPES;

const HANDLERS: Object = {
  [GENERATE_ADVENTURER]: (state: GameState, action: Action): GameState => {
    const { mostRecentEntity, entitiesById } = state;
    const { payload: { adventurer } } = action;

    if (!mostRecentEntity) {
      adventurer.id = 0;
    } else {
      const { id } = entitiesById[mostRecentEntity];
      adventurer.id = id + 1;
    }

    return {
      ...state,
      mostRecentEntity: adventurer.id,
      entitiesById: [...entitiesById, adventurer],
    };
  },
};

export default HANDLERS;
