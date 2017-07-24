import React from 'react';
import { Segment, Image, Item } from 'semantic-ui-react';

const alignmentDict = {
  LAWFUL_EVIL: {
    moralityIcon: '/skull.png',
    societyIcon: '/law.png',
    text: 'Lawful Evil',
  },
  LAWFUL_NEUTRAL: {
    moralityIcon: '/flag.png',
    societyIcon: '/law.png',
    text: 'Lawful Neutral',
  },
  LAWFUL_GOOD: {
    moralityIcon: '/heart.png',
    societyIcon: '/law.png',
    text: 'Lawful Good',
  },
  NEUTRAL_EVIL: {
    moralityIcon: '/skull.png',
    societyIcon: '',
    text: 'Neutral Evil',
  },
  TRUE_NEUTRAL: {
    moralityIcon: '/flag.png',
    societyIcon: '/flag.png',
    text: 'True Neutral',
  },
  NEUTRAL_GOOD: {
    moralityIcon: '/heart.png',
    societyIcon: '/flag.png',
    text: 'Neutral Good',
  },
  CHAOTIC_EVIL: {
    moralityIcon: '/skull.png',
    societyIcon: '/tornado.png',
    text: 'Chaotic Evil',
  },
  CHAOTIC_NEUTRAL: {
    moralityIcon: '/flag.png',
    societyIcon: '/tornado.png',
    text: 'Chaotic Neutral',
  },
  CHAOTIC_GOOD: {
    moralityIcon: '/heart.png',
    societyIcon: '/tornado.png',
    text: 'Chaotic Good',
  },
};

export default ({ alignment }) => (
  <Segment compact>
    <Item.Group>
      <Item>
        <Item.Image
          src={alignmentDict[alignment].moralityIcon}
          size='mini' />
        <Item.Image
          src={alignmentDict[alignment].societyIcon}
          size='mini' />
        <Item.Content verticalAlign='middle'>
          <Item.Header>
            {alignmentDict[alignment].text}
          </Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);