/* @flow */
import CONSTANTS from '../data/constants.json';
import Entity from '../Entity';

const { ENTITY_TYPES } = CONSTANTS;

export default class Adventurer extends Entity {
  constructor() {
    super(ENTITY_TYPES.ADVENTURER);
  }
}