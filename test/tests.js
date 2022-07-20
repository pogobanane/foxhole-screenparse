import assert from 'assert';
import { ItemCounter } from '../itemcounter.js';
import Jimp from 'jimp';
import cv from '@techstark/opencv-js';
import { Canvas, createCanvas, Image, ImageData, loadImage } from 'canvas';
import { writeFileSync } from 'fs'; 
import { JSDOM } from 'jsdom';
import { setInNodejs } from '../icons.js';

describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});

describe('Simple itemcounter API test', function() {
  this.timeout(5 * 60 * 1000);

  it('canvas works with opencv', async () => {
    console.log("ready?");
    await openCvReady();
    console.log("yes");
    installDOM();
    const image = await loadImage('./example-screenshot.jpg');
    const src = cv.imread(image);
    const dst = new cv.Mat();
    const M = cv.Mat.ones(5, 5, cv.CV_8U);
    const anchor = new cv.Point(-1, -1);
    cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    // we create an object compatible HTMLCanvasElement
    const canvas = createCanvas(300, 300);
    cv.imshow(canvas, dst);
    writeFileSync('/tmp/output.jpg', canvas.toBuffer('image/jpeg'));
    src.delete();
    dst.delete();
  });

  it('should initialize', async () => {
    let counter = new ItemCounter(createCanvas(2000, 2000));
    //let counter = new ItemCounter();
    await counter.init();
    counter.setFilter({ 'colonial': false, 'warden': true, 'shippables': false });
    counter.setIconpack('default');
    let screenshot = await Jimp.read('./example-screenshot.jpg');
    let mat = cv.matFromImageData(screenshot.bitmap);
    let findings = await counter.countMat(mat);
    console.log(findings);
    await counter.terminate();
  });
});

// Magic setup function from https://docs.opencv.org/3.4/dc/de6/tutorial_js_nodejs.html:
// Using jsdom and node-canvas we define some global variables to emulate HTML DOM.
// Although a complete emulation can be archived, here we only define those globals used
// by cv.imread() and cv.imshow().
function installDOM() {
  setInNodejs(true);
  const dom = new JSDOM();
  global.document = dom.window.document;
  // The rest enables DOM image and canvas and is provided by node-canvas
  global.Image = Image;
  global.HTMLCanvasElement = Canvas;
  global.ImageData = ImageData;
  global.HTMLImageElement = Image;
}

async function openCvReady() {
  let promise = new Promise(resolve => {
    cv['onRuntimeInitialized']=resolve;
  });
  await promise;
}
