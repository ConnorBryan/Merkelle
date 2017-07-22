import React, { Component } from 'react';
import './style.css';

const Tile = ({ tile }) => {
  const { terrain } = tile;
  const terrains = {
    DUNGEON: '/dungeon.png',
  };

  return (
    <img
      width='64'
      height='64'
      src={terrains[terrain] || '/grass.png'} />
  );
};

const Worldmap = ({ grid }) => (
  <div className="Worldmap">
    <p>
      {grid.map((row, i) => (
        <span key={i}>
          {row.map((tile, i) => (
            <Tile
              key={i}
              tile={tile} />
          ))}
          <br />
        </span>
      ))}
    </p>
  </div>
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

  render() {
    const {
      game: {
        worldmap: { grid = [] },
      },
    } = this.state;
    console.log(grid);
    return (
      <div>
        <Worldmap grid={grid} />
      </div>
    );
  }
}