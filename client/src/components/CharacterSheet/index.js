import React from 'react';
import { Grid, Image, Icon, Item, Progress } from 'semantic-ui-react';
import AbilityScores from '../AbilityScores';

const AdventurerInfo = ({ name, race, _class }) => (
  <Item.Group>
    <Item>
      <Item.Image
        src='http://placehold.it/200x200'
        shape='circular'
        size='mini' />
      <Item.Content>
        <Item.Header>
          {name}
        </Item.Header>
        <Item.Description>
          {race} {_class}
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

const AdventurerHPandEXP = ({ currentHitpoints, hitpointMaximum, level, experiencePoints }) => {
  const experiencePointsToLevel = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000,
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='heartbeat' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Progress
            percent={(currentHitpoints / hitpointMaximum) * 100}
            color='red'
            progress
            inverted />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='trophy' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Progress
            percent={(experiencePoints / experiencePointsToLevel[level + 1]) * 100}
            color='orange'
            progress
            inverted />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ({ adventurer }) => {
  return (
    <Grid>
      <Grid.Row>

        <Grid.Column width={6}>
          <AdventurerInfo
            name={adventurer.name}
            race={adventurer.race}
            _class={adventurer.class} />
        </Grid.Column>

        <Grid.Column width={6}>
          Background, Alignment
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>

        <Grid.Column width={5}>
          <AdventurerHPandEXP
            currentHitpoints={adventurer.currentHitpoints}
            hitpointMaximum={adventurer.hitpointMaximum}
            level={adventurer.level}
            experiencePoints={adventurer.experiencePoints} />
        </Grid.Column>

        <Grid.Column width={5}>
          Death, Life
        </Grid.Column>

        <Grid.Column width={2}>
          Ins, Prof
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>

        <Grid.Column width={3}>
          <AbilityScores abilityScores={adventurer.abilityScores} />
        </Grid.Column>

        <Grid.Column width={3}>
          Skills
        </Grid.Column>

        <Grid.Column width={6}>
          ATK, SPL, EQ
        </Grid.Column>

      </Grid.Row>
    </Grid>
  );
};