/* @flow */
import Entity from '../Entity';
import TYPES from '../Entity/types';

const { EntityTypes } = TYPES;

export default class Adventurer extends Entity {
  constructor() {
    super(EntityTypes.ADVENTURER);
  }
}