/* @flow */
import Blockchain from '../Blockchain';

export type P2PConfig = {
  port: number,
  peers: Array<string>,
  chain: Blockchain,
}

export type SocketMessage = {
  type: string,
  data: any,
}