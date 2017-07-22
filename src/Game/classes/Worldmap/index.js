/* @flow */
import Chance from 'chance';
import Tile from './Tile';
import type { Coordinates } from './types';

export default class Worldmap {
  rows: number;
  columns: number;
  grid: Array<Array<Tile>>;

  constructor(
    rows: number = 3,
    columns: number = 3
  ) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];

    this.generateTiles();
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
}