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

export default ({ worldmap }) => {  
  return (
    <table
      style={compact}
      className='Worldmap'>
      <tbody>
        {worldmap.grid && worldmap.grid.map((row, i) => (
          <tr key={i}>
            {row.map((tile, i) => (
              <td key={i}>
                <img
                  src={terrains[tile.terrain]}
                  width={64}
                  height={64} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};