/* @flow */
import type { AbilityScores } from '../Entity/types';

export type Skills = {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
}

export type DeathSaves = {
  successes: number;
  failures: number;
}

export type Attack = {
  name: string;
  toHit: number;
  hit: Array<number>;
  hitType: string;
}

export type Spell = {
  name: string;
  toHit: number;
  hit: Array<number>;
  hitType: string;
  effect: Function;
}

export type Item = {
  type: string;
  value: number;
}

export type AdventurerData = {
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
}