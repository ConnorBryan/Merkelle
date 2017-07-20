/* @flow */
import Chance from 'chance';
import CONSTANTS from '../../data/constants.json';
import Entity from '../Entity';
import type { AbilityScores } from '../Entity/types';

const { ABILITY_SCORES, ENTITY_TYPES } = CONSTANTS;
const CHANCE = new Chance();

export default class Adventurer extends Entity {
  abilityScores: AbilityScores;

  constructor() {
    super(ENTITY_TYPES.ADVENTURER);
    this.abilityScores = this.generateAbilityScores();
  }

  rollDie(max: number): number {
    return CHANCE.integer({ min: 1, max });
  }

  generateStat(): number {
    const rolls = [];

    for (let i = 0; i < 4; i++) {
      rolls.push(this.rollDie(6));
    }

    let lowest = 6;

    rolls.forEach(roll => roll < lowest && (lowest = roll));

    return rolls
      .filter(roll => roll !== lowest)
      .reduce((acc, cur) => (acc += cur), 0);
  }

  generateAbilityScores(): AbilityScores {
    return ABILITY_SCORES.reduce((acc, cur) => {
      acc[cur] = this.generateStat();
      return acc;
    }, {});
  }
}