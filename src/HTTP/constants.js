/* @flow */
const constants: Object = {
  ADDED_NEW_BLOCK: `> Added a new block to the blockchain.`,
  HTTP_SERVER_LISTENING: (port: number): string => (
    `> HTTP server is listening on port ${port}.`
  ),
};

export default constants;