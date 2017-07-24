import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import WorldmapMenu from '../WorldmapMenu';
import Worldmap from '../Worldmap';

export default class WorldmapView extends Component {
  constructor(props) {
    super(props);
    
    const mostRecentBlock = props.blockchain[props.blockchain.length - 1];
    const data = mostRecentBlock && JSON.parse(mostRecentBlock.data);

    this.state = {
      blockchain: this.props.blockchain,
      mostRecentBlock,
      worldmap: data && data.worldmap,
      tile: {
        y: 0,
        x: 0,
      },
    };
  }

  setActiveTile = tile => {
    const { coordinates: { y, x} } = tile;
    this.setState({
      tile: {
        y,
        x,
      }
    });
  }

  render() {
    const { worldmap, tile } = this.state;
    
    return worldmap
      ?
        (
          <div>
            <Worldmap
              worldmap={worldmap}
              activeTile={tile}
              setActiveTile={this.setActiveTile} />
            <WorldmapMenu activeTile={tile} />
          </div>
        )
      : (
        <Redirect to='/blockchain' />
      )
  }
}