/* @flow */
export type P2PConfig = {
  port: number,
  peers: Array<string>
}

export type SocketMessage = {
  type: string,
  data: Object,
}