/* @flow */
import CONSTANTS from '../constants';
import Entity from '../Entity';

const { EntityTypes } = CONSTANTS;

export default class Monster extends Entity {
  constructor() {
    super(EntityTypes.MONSTER);
  }
}