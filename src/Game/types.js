/* @flow */
import Worldmap from './classes/Worldmap';
import Entity from './classes/Entity';

export type Action = {
  type: string;
  payload: Object;
}

export type GameState = {
  worldmap: ?Worldmap,
  mostRecentEntity: ?number,
  entitiesById: Array<Entity>,
}