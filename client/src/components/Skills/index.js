import React from 'react';
import { Table, Segment } from 'semantic-ui-react';
import { capitalizeOnly } from '../../shared/helpers';

export default ({ skills }) => (
  <Segment>
    <Table
      basic='very'
      celled
      collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Skills
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(skills).map((skill, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              {capitalizeOnly(skill)}
            </Table.Cell>
            <Table.Cell>
              <span style={{ color: skills[skill] > -1 ? 'green' : 'red' }}>{skills[skill]}</span>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);