/* @flow */

export default class Worldmap {
  rows: number;
  columns: number;

  constructor(
    rows: number = 3,
    columns: number = 3
  ) {
    this.rows = rows;
    this.columns = columns;
  }
}