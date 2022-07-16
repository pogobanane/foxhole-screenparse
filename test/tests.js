import assert from 'assert';
import { ItemCounter } from '../itemcounter.js';

describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});

describe('Simple itemcounter API test', () => {
  it('should initialize', () => {
    let counter = new ItemCounter();
  });
});
