import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default ({ activeTile }) => (
  <Menu attached='top' vertical>
    <Menu.Item>
      <Menu.Header>Active tile</Menu.Header>
        {activeTile && (
          <Menu.Menu>
            <Menu.Item name='coordinates'>
              <strong>Coordinates</strong>
              <br />
              <div>
                ({activeTile.coordinates.x}, {activeTile.coordinates.y})
              </div>
           </Menu.Item>
           <Menu.Item name='coordinates'>
              <strong>Terrain</strong>
              <br />
              <div>
                {activeTile.terrain}
              </div>
           </Menu.Item>
          </Menu.Menu>
        )}
    </Menu.Item>
  </Menu>
)