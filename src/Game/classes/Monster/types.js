/* @flow */
import type { AbilityScores } from '../Entity/types';

export type MonsterAction = {
  name: string;
  attackType: string;
  toHit: number;
  targetCount: number;
  hit: Array<number>;
  hitType: string;
}

export type MonsterAttributes = {
  size: string;
  type: string;
  alignment: string;
  armorClass: number;
  hitpoints: Array<number>;
  abilityScores: AbilityScores;
  darkvision: string;
  challengeRating: string;
}

export type MonsterData = {
  name: string,
  actions: Array<MonsterAction>,
  attributes: MonsterAttributes,
}