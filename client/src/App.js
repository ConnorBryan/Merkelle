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
  constructor() {
    super();
    this.state = {
      blockchain: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/blocks')
      .then(rawData => rawData.json())
      .then(blockchain => this.setState({ blockchain }))
      .catch(err => document.write(err));
  }

  render() {
    const { blockchain } = this.state;

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
                  render={() => <BlockchainView blockchain={blockchain} />}  />
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
