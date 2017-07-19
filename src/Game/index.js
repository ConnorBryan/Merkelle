/* @flow */
import { createStore } from 'redux';
import type { GameState, Action } from './types';
import handlers from './handlers';
import ACTION_CREATORS from './actionCreators';

const initialState: GameState = {
  mostRecentEntity: null,
  entitiesById: [],
};

const reducer = (state: GameState = initialState, action: Action): GameState => {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

const store = createStore(reducer);

store.dispatch(ACTION_CREATORS.generateAdventurer());
store.dispatch(ACTION_CREATORS.generateMonster());

console.log(store.getState());