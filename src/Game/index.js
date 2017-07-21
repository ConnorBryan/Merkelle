/* @flow */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ACTION_HANDLERS from './actionHandlers';
import type { GameState, Action } from './types';
import handlers from './handlers';
import monsters from './data/monsters.json';

const { initializeWorldmap, tick } = ACTION_HANDLERS;

const initialState: GameState = {
  mostRecentEntity: null,
  entitiesById: [],
};

const reducer = (state: GameState = initialState, action: Action): GameState => {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(initializeWorldmap());

const GAME = { store, tick };

export default GAME;