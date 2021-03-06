import React from 'react';
import { Table, Segment } from 'semantic-ui-react';

export default ({ abilityScores, savingThrows }) => (
  <Segment>
    <Table
      basic='very'
      celled
      collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Ability Scores
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(abilityScores).map((abilityScore, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              {abilityScore}
            </Table.Cell>
            <Table.Cell>
              {abilityScores[abilityScore]} 
              <span style={{ color: savingThrows[abilityScore] > -1 ? 'green' : 'red' }}> ({savingThrows[abilityScore]}) </span>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);