import React, { Component } from 'react';
import './style.css';

const Tile = ({ tile, active, setActiveTile }) => {
  const { terrain } = tile;
  const terrains = {
    DUNGEON: '/dungeon.png',
  };

  return (
    <img
      className={`Tile ${active ? 'Tile-active' : ''}`}
      width='64'
      height='64'
      src={terrains[terrain] || '/grass.png'}
      onClick={() => setActiveTile(tile)} />
  );
};

const Worldmap = ({ grid, activeTile, setActiveTile }) => (
  <span className="Worldmap">
    <div>
      {grid.map((row, i) => (
        <span key={i}>
          {row.map((tile, i) => (
            <Tile
              key={i}
              tile={tile}
              active={activeTile.coordinates.x === tile.coordinates.x && activeTile.coordinates.y === tile.coordinates.y}
              setActiveTile={setActiveTile} />
          ))}
          <br />
        </span>
      ))}
    </div>
  </span>
);

export default class Merkelle extends Component {
  constructor() {
    super();
    this.state = {
      blockchain: [],
      game: {
        worldmap: {
          grid: [],
        },
      },
      active: {
        tile: {
          terrain: 'GRASSLAND',
          coordinates: { y: 0, x: 0 },
        },
      },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/blocks')
      .then(response => response.json())
      .then(blockchain => this.initialize(blockchain))
      .catch(err => document.write(err));
  }

  initialize(blockchain) {
    const game = JSON.parse(blockchain[blockchain.length - 1].data);
    this.setState({ blockchain, game });
  }

  getMostRecentBlock() {
    const { blockchain } = this.state;
    return blockchain[blockchain.length - 1];
  }

  setActiveTile = tile => {
    this.setState({ active: { tile } });
  }

  render() {
    const {
      game: {
        worldmap: { grid = [] },
      },
      active: {
        tile = null,
      },
    } = this.state;

    return (
      <div>
        <Worldmap
          grid={grid}
          activeTile={tile}
          setActiveTile={this.setActiveTile} />
          {tile && (
            <div>
              Active tile:
              <br />
              Terrain:
              {tile.terrain}
              <br />
              Coordinates:
              {tile.coordinates.x}
              {tile.coordinates.y}
            </div>
          )}
      </div>
    );
  }
}