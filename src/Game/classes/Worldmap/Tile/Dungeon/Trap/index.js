/* @flow */
import CONSTANTS from '../../../../../data/constants.json';
import type { AdventurerData } from '../../../../Adventurer/types';

const {
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH,
  },
} = CONSTANTS;

export default class Trap {
  name: string;
  difficultyClass: string;
  outcome: Function;

  constructor(
    difficultyClass: string = ONE_EIGHTH
  ) {
    this.difficultyClass = difficultyClass;
    this.randomize();
  }

  randomize() {
    this.name = 'a deadly trap';
    this.outcome = (adventurer: AdventurerData, difficultyClass: number, roll: number) => {
      if (roll < difficultyClass) {
        adventurer.currentHitpoints -= 10;
        console.log('the trap gottem boys');
      } else {
        console.log('hes not ok guys');
      }
    } 
  }
}