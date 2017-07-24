import React, { Component } from 'react';

export default class Worldmap extends Component {
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
    return (
      <div>
        {console.log(this.state)}
      </div>
    );
  }
}