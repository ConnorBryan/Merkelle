import React from 'react';
import { Segment, List } from 'semantic-ui-react';
import Block from '../Block';

const overflowing = {
  paddingLeft: '5rem',
  overflow: 'hidden',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
};

const marginLeft = { marginLeft: '5rem' };

export default props => (
  <Segment
    style={overflowing}
    raised>
    <List horizontal relaxed>
      {props.blockchain.map((block, i) => (
        <List.Item
          key={i}
          style={marginLeft}>
          <Block size={8} data={block} />
        </List.Item>
      ))}
    </List>
  </Segment>
);