import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Image, Segment, Sidebar, Header, List } from 'semantic-ui-react';
import WorldmapMenu from '../WorldmapMenu';
import Worldmap from '../Worldmap';

const difficultyClasses = {
  'ONE_EIGHTH': '1/8',
};

export default class WorldmapView extends Component {
  constructor(props) {
    super(props);
    
    const mostRecentBlock = props.blockchain[props.blockchain.length - 1];
    const data = mostRecentBlock && JSON.parse(mostRecentBlock.data);

    this.state = {
      blockchain: this.props.blockchain,
      mostRecentBlock,
      worldmap: data && data.worldmap,
      tile: {
        coordinates: {
          y: 0,
          x: 0,
        },
        terrain: 'GRASSLAND',
        name: null,
        encounters: {},
        traps: [],
      },
      isDungeon: false,
      isTown: false,
    };
  }

  setActiveTile = tile => {
    const { coordinates: { y, x}, terrain, name, easy, medium, hard, traps } = tile;
    this.setState({
      tile: {
        coordinates: { y, x },
        terrain,
        name,
        traps,
        easy,
        medium,
        hard,
        isDungeon: terrain === 'DUNGEON',
        isTown: terrain === 'TOWN',
      },
    });
  }

  render() {
    const { worldmap, tile } = this.state;
    const { easy, medium, hard, traps, isDungeon, isTown } = tile;

    return worldmap
      ?
        (
          <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher>
              <Worldmap
                worldmap={worldmap}
                activeTile={tile}
                setActiveTile={this.setActiveTile} />
              <WorldmapMenu activeTile={tile} />
            </Sidebar.Pusher>
            <Sidebar
              as={Segment}
              animation='overlay'
              direction='right'
              visible={isDungeon || isTown}
              vertical
              textAlign='center'>
              {isDungeon && (
                <div>
                  <Image
                    src='/dungeon.png'
                    size='small'
                    shape='circular'
                    centered />
                  <Header as='h2'>
                    {tile.name}
                  </Header>
                  <List>
                    <List.Item>
                      <List.Header>
                        Traps
                      </List.Header>  
                    </List.Item>
                    {traps.map((trap, i) => (
                      <List.Item key={i}>
                      {trap.name} ({difficultyClasses[trap.difficultyClass]})
                      </List.Item>
                    ))}
                    <List.Item>
                      <List.Header>
                        Encounters
                      </List.Header>
                    </List.Item>
                    <List.Item>
                      <List.Header>
                        Easy
                      </List.Header>
                      {easy.monsters.map((monster, i) => (
                        <p key={i}>{monster.name}</p>
                      ))}
                    </List.Item>
                    <List.Item>
                      <List.Header>
                        Medium
                      </List.Header>
                      {medium.monsters.map((monster, i) => (
                        <p key={i}>{monster.name}</p>
                      ))}
                    </List.Item>
                    <List.Item>
                      <List.Header>
                        Hard
                      </List.Header>
                      {hard.monsters.map((monster, i) => (
                        <p key={i}>{monster.name}</p>
                      ))}
                    </List.Item>
                    {/*{encounters.map((encounter, i) => (
                      <p>Encounter</p>
                    ))}*/}
                  </List>
                </div>
              )}
              {isTown && (
                <div>
                  <Image
                    src='/town.png'
                    size='small'
                    shape='circular'
                    centered />
                  <Header as='h2'>
                    {tile.name}
                  </Header>
                </div>
              )}
            </Sidebar>
          </Sidebar.Pushable>
        )
      : (
        <Redirect to='/blockchain' />
      )
  }
}