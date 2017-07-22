import React, { Component } from 'react';
import './style.css';

const Tile = ({ tile, active, setActiveTile }) => {
  const { terrain } = tile;
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
        town: null,
        dungeon: null,
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
    if (tile.terrain === 'TOWN') {
      this.setState({ active: { tile, town: tile } });
    } else if (tile.terrain === 'DUNGEON') {
      this.setState({ active: { tile, dungeon: tile } });
    } else {
      this.setState({ active: { tile } });
    }
  }

  render() {
    const {
      game: {
        worldmap: { grid = [] },
      },
      active: {
        tile,
        town,
        dungeon,
      },
    } = this.state;

    return (
      <div>
        <h1>Merkelle</h1>
        <Worldmap
          grid={grid}
          activeTile={tile}
          setActiveTile={this.setActiveTile} />
          {tile && !town && !dungeon && (
            <div>
              <strong>Active tile: </strong>
              <br />
              Terrain:
              {tile.terrain}
              <br />
              Coordinates:
              {tile.coordinates.x}, {tile.coordinates.y}
            </div>
          )}
          {town && (
            <div>
              <strong>Active town: </strong>
              <br />
              {town.name}
              <br />
              Coordinates:
              {town.coordinates.x}, {town.coordinates.y}
            </div>
          )}
          {dungeon && (
            <div>
              <strong>Active dungeon: </strong>
              <br />
              {dungeon.name}
              <br />
              Coordinates:
              {dungeon.coordinates.x}, {dungeon.coordinates.y}
            </div>
          )}
      </div>
    );
  }
}