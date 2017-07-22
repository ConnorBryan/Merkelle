/* @flow */
import Chance from 'chance';
import type { AdventurerData } from '../../../Adventurer/types';
import Monster from '../../../Monster';
import Tile from '../index';
import Trap from './Trap';
import Encounter from './Encounter';

const CHANCE = new Chance();

export default class Dungeon extends Tile {
  name: string;
  traps: Array<Trap>;
  easy: Encounter;
  medium: Encounter;
  hard: Encounter;

  constructor(coordinates: Object) {
    super(coordinates, 'DUNGEON');
    this.randomize();
  }

  randomize(): void {
    this.name = CHANCE.city();
    this.generateTraps();
    this.generateEncounters();
  }

  generateTraps(): void {
    this.traps = [
      new Trap('ONE_EIGHTH'),
      new Trap('ONE_EIGHTH'),
      new Trap('ONE_EIGHTH'),
    ];
  }

  generateEncounters(): void {
    this.easy = new Encounter('ONE_EIGHTH', 'EASY');
    this.medium = new Encounter('ONE_EIGHTH', 'MEDIUM');
    this.hard = new Encounter('ONE_EIGHTH', 'HARD');
  }
}