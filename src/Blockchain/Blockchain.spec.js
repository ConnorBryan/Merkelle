import { expect } from 'chai';
import Blockchain from './index';

describe('Blockchain', () => {
  it('should exist', () => {
    const chain = new Blockchain();
    expect(chain).to.exist;
  });
});