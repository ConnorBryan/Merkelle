/* @flow */
import type { GameState, Action } from './types';
import ACTION_TYPES from './actionTypes';

const {
  GENERATE_WORLDMAP,
  GENERATE_ENTITY,
}: Object = ACTION_TYPES;

const HANDLERS: Object = {
  [GENERATE_WORLDMAP]: (state: GameState, action: Action): GameState => {
    const { payload: { worldmap } } = action;

    return {
      ...state,
      worldmap,
    };
  },

  [GENERATE_ENTITY]: (state: GameState, action: Action): GameState => {
    const { mostRecentEntity, entitiesById } = state;
    const { payload: { entity } } = action;

    if (typeof mostRecentEntity !== 'number') {
      entity.id = 0;
    } else {
      const { id } = entitiesById[mostRecentEntity];
      entity.id = id + 1;
    }

    return {
      ...state,
      mostRecentEntity: entity.id,
      entitiesById: [...entitiesById, entity],
    };
  },
};

export default HANDLERS;
