import React from 'react';
import { Table, Segment } from 'semantic-ui-react';

export default ({ abilityScores }) => (
  <Segment compact>
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
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);