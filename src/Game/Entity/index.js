/* @flow */
import Chance from 'chance';
import type { AbilityScores } from './types';

const CHANCE = new Chance();

export default class Entity {
  id: ?number;
  type: string;
  abilityScores: AbilityScores;

  constructor(
    type: string,    
    abilityScores: AbilityScores = this.generateAbilityScores(),
  ) {
    this.id = null;
    this.type = type;
    this.abilityScores = abilityScores;
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
    const abilities = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    
    return abilities.reduce((acc, cur) => {
      acc[cur] = this.generateStat();
      return acc;
    }, {});
  }
 }