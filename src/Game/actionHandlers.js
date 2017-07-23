/* @flow */
import ACTION_CREATORS from './actionCreators';

const {
  generateWorldmap,
  generateAdventurer,
  generateMonster,
} = ACTION_CREATORS;

const ACTION_HANDLERS = {
  initializeWorldmap: (): Function => (dispatch: Function): void => {
    dispatch(generateWorldmap());
    dispatch(generateAdventurer());
  },
  tick: (): Function => (dispatch: Function): void => {
    dispatch(generateMonster());
  },
};

export default ACTION_HANDLERS;