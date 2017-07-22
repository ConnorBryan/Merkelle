/* @flow */
import Chance from 'chance';
import CONSTANTS from '../../../data/constants.json';

const {
  TERRAIN_TYPES,
} = CONSTANTS;
const CHANCE = new Chance();

export default class Tile {
  coordinates: Object;
  terrain: ?string;

  static generateTerrain() {
    const terrains = Object.keys(TERRAIN_TYPES);
    return terrains[CHANCE.integer({ min: 0, max: terrains.length - 1 })];
  }

  constructor(coordinates: Object, terrain: ?string) {
    this.coordinates = coordinates;
    this.terrain = terrain;
  }
}