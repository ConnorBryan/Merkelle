/* @flow */
import ACTION_CREATORS from './actionCreators';

const {
  generateAdventurer,
  generateMonster,
} = ACTION_CREATORS;

const NOOP = () => {};

const ACTION_HANDLERS = {
  initializeWorldmap: (): Function => (dispatch: Function): void => {
    dispatch(generateAdventurer());
  },
  tick: (): Function => (dispatch: Function): void => {
    dispatch(generateMonster());
  },
};

export default ACTION_HANDLERS;