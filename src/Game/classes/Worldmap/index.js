/* @flow */
import Chance from 'chance';
import Tile from './Tile';
import Dungeon from './Tile/Dungeon';
import Town from './Tile/Town';

const CHANCE: Chance = new Chance();

export default class Worldmap {
  rows: number;
  columns: number;
  grid: Array<Array<Tile>>;

  constructor(
    rows: number = 8,
    columns: number = 8
  ) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];

    this.generateTiles();
  }

  getCoordinates(): Object {
    const row: number = CHANCE.integer({ min: 0, max: this.rows - 1 });
    const column: number = CHANCE.integer({ min: 0, max: this.columns - 1 });

    return { y: row, x: column };
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
    this.generateDungeon();
    this.generateTown();
  }

  generateDungeon(): void {
    const { y, x } = this.getCoordinates();

    this.grid[y][x] = new Dungeon({ y, x });
  }

  generateTown(): void {
    const { y, x } = this.getCoordinates();

    this.grid[y][x] = new Town({ y, x });
  }
}