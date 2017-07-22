/* @flow */
import Chance from 'chance';
import Tile from './Tile';
import Dungeon from './Tile/Dungeon';

const CHANCE = new Chance();

export default class Worldmap {
  rows: number;
  columns: number;
  grid: Array<Array<Tile>>;

  constructor(
    rows: number = 5,
    columns: number = 5
  ) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];

    this.generateTiles();
    this.generateDungeon();
  }

  generateTiles(): void {
    for (let y = 0; y < this.rows; y++) {
      const row = [];
      for (let x = 0; x < this.columns; x++) {
        const coordinates = { y, x };
        const terrain = Tile.generateTerrain();

        row.push(new Tile(coordinates, terrain));
      }
      this.grid.push(row);
    }
  }

  generateDungeon(): void {
    const row = CHANCE.integer({ min: 0, max: this.rows - 1 });
    const column = CHANCE.integer({ min: 0, max: this.columns - 1 });

    this.grid[row][column] = new Dungeon({ row, column });
  }
}