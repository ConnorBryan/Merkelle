/* @flow */
import CONSTANTS from '../../../../../data/constants.json';
import Monster from '../../../../Monster';

const {
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH,
  },
  STAGE_TYPES: {
    EASY,
  },
} = CONSTANTS;

export default class Encounter {
  name: string;
  difficultyClass: string;
  stage: string;
  monsters: Array<Monster>;
    
  constructor(
    difficultyClass: string = ONE_EIGHTH,
    stage: string = EASY
  ) {
    this.difficultyClass = difficultyClass;
    this.stage = stage;
    this.randomize();
  }

  randomize() {
    this.monsters = [new Monster()];
  }
}