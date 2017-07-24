import React from 'react';
import { Grid, Image, Icon, Item, Progress, Checkbox } from 'semantic-ui-react';
import { capitalizeOnly, constantToWord } from '../../shared/helpers';
import AbilityScores from '../AbilityScores';
import Skills from '../Skills';

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
          {capitalizeOnly(race)} {capitalizeOnly(_class)}
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
const marginRight = { marginRight: '1rem' };
const DeathSaves = ({ deathSaves }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={2}>
        <Icon name='thumbs up' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Checkbox
          style={marginRight}
          checked={deathSaves.failures >= 1}
        />
        <Checkbox
          style={marginRight}
          checked={deathSaves.failures >= 2}
        />
        <Checkbox
          style={marginRight}
          checked={deathSaves.failures >= 3}
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}>
        <Icon name='thumbs down' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Checkbox
          style={marginRight}
          checked={deathSaves.successes >= 1}
        />
        <Checkbox
          style={marginRight}
          checked={deathSaves.successes >= 2}
        />
        <Checkbox
          style={marginRight}
          checked={deathSaves.successes >= 3}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

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
          Background: {capitalizeOnly(adventurer.background)}
          <br />
          Alignment: {constantToWord(adventurer.alignment)}
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
          <DeathSaves deathSaves={adventurer.deathSaves} />
        </Grid.Column>

        <Grid.Column width={2}>
          Proficiency: {adventurer.proficiencyBonus}
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>

        <Grid.Column width={4}>
          <AbilityScores abilityScores={adventurer.abilityScores} savingThrows={adventurer.savingThrows} />
        </Grid.Column>

        <Grid.Column width={4}>
          <Skills skills={adventurer.skills} />
        </Grid.Column>

        <Grid.Column width={4}>
          ATK, SPL, EQ
        </Grid.Column>

      </Grid.Row>
    </Grid>
  );
};