import React from 'react';
import { Grid } from 'semantic-ui-react';
import AbilityScores from '../AbilityScores';

export default ({ adventurer }) => {
  return (
    <Grid>
      <Grid.Row>

        <Grid.Column width={6}>
          Name, Race, Class
        </Grid.Column>

        <Grid.Column width={6}>
          Background, Alignment
        </Grid.Column>

      </Grid.Row>

      <Grid.Row>

        <Grid.Column width={5}>
          HP, EXP
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