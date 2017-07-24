import React from 'react';
import { Segment, Image, Item, Icon, List, Progress } from 'semantic-ui-react';

const capitalizeOnly = word => (
  word
    .split('')
    .map((letter, i) => (
      i === 0
        ? letter.toUpperCase()
        : letter.toLowerCase()
    ))
    .join('')
);

export default ({
  name,
  race,
  _class,
  currentHitpoints,
  hitpointMaximum,
  level,
  experiencePoints
}) => (
  <Segment compact>
    <List>
      <List.Item>
        <Item.Group>
          <Item>
            <Item.Image
              shape='circular'
              src='/heart.png'
              size='mini' />
            <Item.Content verticalAlign='middle'>
              <Item.Header>
                {name}
              </Item.Header>
              <Item.Meta>
                {capitalizeOnly(race)} {capitalizeOnly(_class)}
              </Item.Meta>
            </Item.Content>            
          </Item>
        </Item.Group>
      </List.Item>
      <List.Item>
        <Item.Group>
          <Item>
            <Icon name='heartbeat' />
            <Item.Content verticalAlign='middle'>
              <Progress
                error
                value={0}
                total={hitpointMaximum}
                size='small'
                progress='ratio'
                inverted />
            </Item.Content>
          </Item>
        </Item.Group>
      </List.Item>
      <List.Item>
        <Item.Group>
          <Item>
            <Icon name='trophy' />
            <Item.Content verticalAlign='middle'>
              <Progress
                warning
                value={experiencePoints}
                total={300}
                size='small'
                progress='ratio'
                inverted />
            </Item.Content>
          </Item>
        </Item.Group>
      </List.Item>
    </List>
  </Segment>
);