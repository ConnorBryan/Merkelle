import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import HomeView from './components/HomeView';
import BlockchainView from './components/BlockchainView';
import WorldmapView from './components/WorldmapView';
import AdventurersView from './components/AdventurersView';

const screens = [
  {
    link: '/blockchain',
    icon: 'cube',
    name: 'Blockchain',
  },
  {
    link: '/worldmap',
    icon: 'map',
    name: 'Worldmap',
  },
  {
    link: '/adventurers',
    icon: 'users',
    name: 'Adventurers',
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
            <Segment>
              <Header />
              <Navbar screens={screens} />
            </Segment>
            <Segment>
              <Switch>
                <Route
                  path='/'
                  render={() => <Redirect to='/blockchain' />}
                  exact />
                <Route
                  path='/blockchain'
                  component={BlockchainView}  />
                <Route
                  path='/worldmap'
                  component={WorldmapView}  />
                <Route
                  path='/adventurers'
                  component={AdventurersView} />
                </Switch>
            </Segment>
        </Container>
      </Router>
    );
  }
}

export default App;
