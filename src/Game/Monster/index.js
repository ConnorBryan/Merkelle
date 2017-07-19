/* @flow */
import Entity from '../Entity';
import TYPES from '../Entity/types';

const { EntityTypes } = TYPES;

export default class Monster extends Entity {
  constructor() {
    super(EntityTypes.MONSTER);
  }
}