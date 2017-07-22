import { expect } from 'chai';
import Tile from './Tile';
import Worldmap from './index';

describe('(Worldmap)', () => {
  let worldmap;

  beforeEach(() => worldmap = new Worldmap());
  
  it('should default to a 3x3 grid when supplied no arguments', () => {
    expect(worldmap.rows).to.equal(3);  
    expect(worldmap.columns).to.equal(3);  
  });

  it('should be comprised entirely of Tiles', () => {
    worldmap.grid.forEach(row => row.forEach(column => {
      expect(column).to.be.instanceof(Tile);
    }));
  });
});