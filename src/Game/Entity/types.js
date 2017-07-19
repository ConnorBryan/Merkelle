/* @flow */
export type AbilityScores = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
}

const EntityTypes = {
  ADVENTURER: 'ADVENTURER',
  MONSTER: 'MONSTER',
};

export default {
  EntityTypes,
};