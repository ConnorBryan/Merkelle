import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default ({ activeTile }) => (
  <Menu attached='top' vertical>
    <Menu.Item>
      <Menu.Header>Active tile</Menu.Header>
      <Menu.Menu>
        <Menu.Item name='coordinates'>
          <strong>Coordinates</strong>
          <br />
          {activeTile && (
            <div>
              ({activeTile.x}, {activeTile.y})
            </div>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
  </Menu>
)