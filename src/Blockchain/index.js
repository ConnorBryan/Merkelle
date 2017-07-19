/* @flow */
import CryptoJS from 'crypto-js';
import type { BlockConfig } from './types';

export class Block {
  index: number;
  hash: string;
  previousHash: string;
  timestamp: number;
  data: string;

  constructor(blockConfig: BlockConfig) {
    const {
      index,
      hash,
      previousHash,
      timestamp,
      data,
    } = blockConfig;
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

export type GameState = {}

export default class Blockchain {
  chain: Array<Block>;

  constructor() {
    this.chain = [this.getGenesisBlock({})];
  }

  getGenesisBlock = (initialGameState: GameState): Block => (
    new Block({
      index: 0,
      hash: 'merkelle',
      previousHash: '0',
      timestamp: 1234567890,
      data: JSON.stringify({ transactions: [], gameState: initialGameState }),
    })
  )

  getMostRecentBlock = (): Block => this.chain[this.chain.length - 1]

  calculateHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  }

  calculateHashForBlock = (block: Block): string => {
    const {
      index,
      previousHash,
      timestamp,
      data
    } = block;

    return this.calculateHash(index, previousHash, timestamp, data);
  }

  generateNextBlock = (): Block => {
    const previousBlock = this.getMostRecentBlock();
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextData = 'add me';
    const nextHash = this.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, nextData);

    return new Block({
      index: nextIndex,
      hash: nextHash,
      previousHash: previousBlock.hash,
      timestamp: nextTimestamp,
      data: nextData,
    });
  }

  addBlock = (): void => {
    const block = this.generateNextBlock();

    if (this.isValidNewBlock(block, this.getMostRecentBlock())) {
      this.chain.push(block);
    }
  }
  
  isValidNewBlock = (block: Block, previousBlock: Block): boolean => {
    if (previousBlock.index + 1 !== block.index) return false;
    if (previousBlock.hash !== block.previousHash) return false;
    if (this.calculateHashForBlock(block) !== block.hash) return false;
    return true;
  }

  isValidChain = (chain: Array<Block>): boolean => {
    const genesisBlock = JSON.stringify(this.getGenesisBlock({}));
    const temporaryChain = [this.chain[0]];
    const isInvalidGenesisBlock = JSON.stringify(this.chain[0] !== genesisBlock);

    if (isInvalidGenesisBlock) return false;

    for (let i = 0; i < chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = temporaryChain[i - 1];
      const isValid = this.isValidNewBlock(currentBlock, previousBlock);

      if (!isValid) return false;

      temporaryChain.push(currentBlock);
    }

    return true;
  }

  replaceChain = (chain: Array<Block>) => {
    if (this.isValidChain(chain) && chain.length > this.chain.length) {
      this.chain = chain;
    }
  }
}