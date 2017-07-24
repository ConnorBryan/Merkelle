import React from 'react';

import { Table, Segment } from 'semantic-ui-react';

const AbilityScores = ({ abilityScores }) => (
  <Segment compact>
    <Table
      basic='very'
      celled
      collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Ability Score
          </Table.HeaderCell>
          <Table.HeaderCell>
            Value
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

export default ({ blockchain }) => {
  if (blockchain.length > 0) {
    const mostRecentBlock = blockchain[blockchain.length - 1];
    const adventurersById = (JSON.parse(mostRecentBlock.data)).entitiesById.filter(entity => entity.type === 'ADVENTURER');
    return (
      <AbilityScores abilityScores={adventurersById[0].abilityScores} />
    );
  }
  return <p>Loading...</p>
}