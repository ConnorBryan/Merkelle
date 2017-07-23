import React from 'react';
import { Item } from 'semantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Item.Image
        src='/diamond.png'
        size='small' />
      <Item.Content>
        <Item.Header
          className='fancy'
          as='h1'>
          Merkelle
        </Item.Header>
        <Item.Meta>
          A blockchain-based autonomous game world using D&D OGL.
        </Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>
);