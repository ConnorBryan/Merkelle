import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import Worldmap from '../Worldmap';


export default class WorldmapView extends Component {
  constructor(props) {
    super(props);
    
    const mostRecentBlock = props.blockchain[props.blockchain.length - 1];
    
    this.state = {
      blockchain: this.props.blockchain,
      mostRecentBlock,
      worldmap: mostRecentBlock && (JSON.parse(mostRecentBlock.data)).worldmap,
    };
  }

  render() {
    const { worldmap } = this.state;
    
    return worldmap
      ?
        (
          <div>
            <Worldmap worldmap={worldmap} />
          </div>
        )
      : (
        <Redirect to='/blockchain' />
      )
  }
}