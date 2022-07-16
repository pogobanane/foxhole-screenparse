import assert from 'assert';
import { ItemCounter } from '../itemcounter.js';
import Jimp from 'jimp';
//const { Jimp } = jimp;

describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});

describe('Simple itemcounter API test', () => {
  it('should initialize', async () => {
    let counter = new ItemCounter();
    await counter.init();
    counter.setFilter({ 'colonial': false, 'warden': false, 'shippables': false });
    counter.setIconpack('default');
    let screenshot = await Jimp.read('./example-screenshot.jpg');
    let findings = await counter.count(screenshot);
    console.log(findings);
    await counter.terminate();
  });
});
