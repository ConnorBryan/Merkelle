import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import Block from '../Block';

const overflowing = {
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
  paddingLeft: '5rem',
  paddingRight: '5rem',
  overflow: 'hidden',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
};

const marginLeft = { marginLeft: '5rem' };

export default class BlockchainView extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('blockchain').scrollLeft = 99999999;
    }, 500);
  }

  componentDidUpdate() {
      document.getElementById('blockchain').scrollLeft = 99999999;    
  }

  render() {
    const { blockchain } = this.props;

    return (
      <Segment
        id='blockchain'
        style={overflowing}
        raised>
        <List horizontal relaxed>
          {blockchain.map((block, i) => (
            <List.Item
              key={i}
              style={marginLeft}>
              <Block
                active={i === blockchain.length - 1}
                size={8}
                data={block} />
            </List.Item>
          ))}
        </List>
      </Segment>
    );
  }
}