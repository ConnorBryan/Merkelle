/* @flow */
import Chance from 'chance';
import Tile from '../index';

const CHANCE = new Chance();

export default class Town extends Tile {
  name: string;

  constructor(coordinates: Object) {
    super(coordinates, 'TOWN');
    this.randomize();
  }

  randomize(): void {
    this.name = CHANCE.city();
  }
}