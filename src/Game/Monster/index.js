/* @flow */
import Chance from 'chance';
import CONSTANTS from '../data/constants.json';
import MONSTERS from '../data/monsters.json';
import Entity from '../Entity';
import type {
  MonsterAction,
  MonsterAttributes,
  MonsterData,
} from './types';

const {
  ENTITY_TYPES,
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH,
  },
  ERRORS: {
    INVALID_MONSTER_NAME,
    INVALID_MONSTER_COUNT,
  },
} = CONSTANTS;
const CHANCE = new Chance();

export default class Monster extends Entity {
  name: ?string;
  actions: Array<MonsterAction>;
  attributes: MonsterAttributes;

  constructor(
    name: ?string = null,
    challengeRating: number = ONE_EIGHTH
  ) {
    super(ENTITY_TYPES.MONSTER);

    if (name) {
      const monster = this.getDataFor(name);

      if (!monster) throw new Error(INVALID_MONSTER_NAME);

      this.initializeAs(monster);
    } else {
      this.randomize(challengeRating);
    }
  }

  getDataFor(name: string): MonsterData {
    return MONSTERS.filter(monster => monster.name === name)[0];
  }

  randomize(challengeRating: number): void {
    const monsterCount = MONSTERS.length;

    if (monsterCount.length === 0) {
      throw new Error(INVALID_MONSTER_COUNT);
    }

    let monster = MONSTERS[CHANCE.integer({ min: 0, max: monsterCount - 1 })];

    while (monster.attributes.challengeRating !== challengeRating) {
      monster = this.randomize(challengeRating);
    }

    // $ForgetFlow
    this.initializeAs(monster);
  }

  initializeAs(monster: MonsterData): void {
    const {
      name,
      actions,
      attributes,
    } = monster;

    this.name = name;
    this.actions = actions;
    this.attributes = attributes;
  }
}