import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import './style.css';

export default props => (
  <Menu
    attached='bottom'>
    {props.screens.map((screen, i) => (
      <NavLink
        key={i}
        to={screen.link}
        activeClassName='active'>
        <Menu.Item className='fancy'>
          <Icon name={screen.icon} /> {screen.name}
        </Menu.Item>
      </NavLink>
    ))}
  </Menu>
);