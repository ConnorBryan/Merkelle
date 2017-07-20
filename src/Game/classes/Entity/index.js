/* @flow */
import Chance from 'chance';
import CONSTANTS from '../../data/constants.json';

export default class Entity {
  id: ?number;
  type: string;

  constructor(type: string) {
    this.id = null;
    this.type = type;
  }
 }