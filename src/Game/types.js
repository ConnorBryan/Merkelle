/* @flow */
import Entity from './classes/Entity';

export type Action = {
  type: string;
  payload: Object;
}

export type GameState = {
  mostRecentEntity: ?number,
  entitiesById: Array<Entity>,
}