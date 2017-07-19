/* @flow */
import CONSTANTS from '../constants';
import Entity from '../Entity';

const { EntityTypes } = CONSTANTS;

export default class Adventurer extends Entity {
  constructor() {
    super(EntityTypes.ADVENTURER);
  }
}