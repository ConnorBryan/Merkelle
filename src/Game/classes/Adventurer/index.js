/* @flow */
import Chance from 'chance';
import CONSTANTS from '../../data/constants.json';
import Entity from '../Entity';
import type { AbilityScores } from '../Entity/types';
import type {
  Skills,
  DeathSaves,
  Attack,
  Spell,
  Item
} from './types';

const {
  ENTITY_TYPES,
  ABILITY_SCORES,
  CLASSES,
  CLASS_LIST,
  RACES,
  RACE_LIST,
  ALIGNMENTS,
  ALIGNMENT_LIST,
  BACKGROUND,
  BACKGROUND_LIST,
} = CONSTANTS;
const CHANCE = new Chance();

export default class Adventurer extends Entity {
  name: string;
  class: string;
  level: number;
  background: string;
  race: string;
  alignment: string;
  experiencePoints: number;
  abilityScores: AbilityScores;
  inspiration: boolean;
  proficiencyBonus: number;
  savingThrows: AbilityScores;
  skills: Skills;
  hitpointMaximum: number;
  currentHitpoints: number;
  temporaryHitpoints: number;
  hitDiceValue: number;
  hitDiceCount: number;
  deathSaves: DeathSaves;
  attacks: Array<Attack>;
  spells: Array<Spell>;
  equipment: Array<Item>;

  constructor() {
    super(ENTITY_TYPES.ADVENTURER);
    this.randomize();
  }

  randomize(): void {
    this.name = CHANCE.name();
    this.class = this.generateClass();
    this.level = 1;
    this.background = this.generateBackground();
    this.race = this.generateRace();
    this.alignment = this.generateAlignment();
    this.experiencePoints = 0;
    this.abilityScores = this.generateAbilityScores();
    this.inspiration = false;
    this.proficiencyBonus = 2;
    // this.savingThrows = this.getSavingThrows();
    // this.skills = this.getSkills();
    // this.currentHitpoints = this.getHitpoints().current;
    // this.hitpointMaximum = this.getHitpoints().max;
    // this.temporaryHitpoints = 0;
    // this.hitDiceValue = this.getHitDiceValue();
    // this.hitDiceCount = 1;
    // this.deathSaves = {
    //   successes: 0,
    //   failures: 0,
    // };
    // this.attacks = this.getAttacks();
    // this.spells = this.getSpells();
    // this.equipment = this.getEquipment();
  }

  rollDie(max: number): number {
    return CHANCE.integer({ min: 1, max });
  }

  generateClass(): string {
    return CLASS_LIST[CHANCE.integer({ min: 0, max: CLASS_LIST.length - 1 })];
  }

  generateBackground(): string {
    return BACKGROUND_LIST[CHANCE.integer({ min: 0, max: BACKGROUND_LIST.length - 1 })];
  }

  generateRace(): string {
    return RACE_LIST[CHANCE.integer({ min: 0, max: RACE_LIST.length - 1 })];
  }

  generateAlignment(): string {
    return ALIGNMENT_LIST[CHANCE.integer({ min: 0, max: ALIGNMENT_LIST.length - 1 })];
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