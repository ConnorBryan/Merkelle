import React from 'react';
import './style.css';

const terrains = {
  DUNGEON: '/dungeon.png',
  GRASSLAND: '/grass.png',
  ARCTIC: '/arctic.png',
  COAST: '/coast.jpg',
  DESERT: '/desert.png',
  FOREST: '/forest.jpg',
  MOUNTAIN: '/mountain.png',
  SWAMP: '/swamp.png',
  UNDERDARK: '/underdark.jpg',
  TOWN: '/town.png',
};

const compact = {
  padding: 0,
  margin: 0,
  lineHeight: 0,
  lineSpacing: 0,
  borderCollapse: 'collapse',
  borderSpacing: 0,
};

export default ({ worldmap, activeTile, setActiveTile }) => {
  const { coordinates: { y, x } } = activeTile;
  let rows = 0;
  let columns = 0;
    
  return (
    <table
      style={compact}
      className='Worldmap'>
      <tbody>
        {worldmap.grid && worldmap.grid.map((row, i) => {
          rows = i;
          return (
            <tr key={i}>
              {row.map((tile, i) => {
                columns = i;
                return (
                  <td
                    key={i}
                    style= {rows === y && columns === x
                        ? { outline: `1px solid orange`, boxSizing: 'border-box' }
                        : { boxSizing: 'border-box' }
                    }
                    onClick={() => setActiveTile(tile)}>
                    <img
                      src={terrains[tile.terrain]}
                      style={{ boxSizing: 'border-box' }}
                      width={64}
                      height={64} />
                  </td>
                )
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};