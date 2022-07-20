import { loadImage } from './image.js';
import { getImgPath, resize, addCrate, addExtraIcon } from './itemcounter.js';
import { known_iconpacks } from './items.js';
import Jimp from 'jimp';
import cv from '@techstark/opencv-js';

export let inNodejs = false;

export function setInNodejs(bool) {
  inNodejs = bool;
}

export class Icons {
  constructor(iconpacksLoc = "iconpacks") {
    this.cache = new Map();
    this.http404s = [];
    this.iconpacksLoc = iconpacksLoc; // iconpacksLoc + '/mods/' + iconpack + '/' + item.imgUasset;
  }

  getIconUrl(item, iconpack) {
    let idx = known_iconpacks.findIndex((pack) => {
      return pack.name == iconpack;
    });
    if (idx === -1) {
      console.error("Requesting item from unknown iconpack.");
      return null;
    }
    let url = this.iconpacksLoc + '/mods/' + iconpack + '/' + item.imgUasset;
    return url;
  }

  async localItemIconMat(item, iconpack = 'default') {
    if (iconpack !== 'default') {
      let url = this.getIconUrl(item, iconpack);
      // TODO on file not found, exit if but and try default
      let image = await Jimp.read(url);
      print(url);
      print(image);
      let mat = cv.matFromImageData(image.bitmap); // TODO check all occurences of this function for memory leaks
      return mat;
    }

    // return default item
    let image = await Jimp.read(getImgPath(item.imgPath));
    let mat = cv.matFromImageData(image.bitmap);
    return mat;
  }

  async loadItemIconMat(item, iconpack = 'default') {
    if (iconpack !== 'default') {
      let url = this.getIconUrl(item, iconpack);
      if (this.http404s.includes(url)) {
        // Quick fallback to default item
      } else {
        let response = await fetch(url);
        if (response.ok) {
          let image = await loadImage(URL.createObjectURL(await response.blob()));
          return cv.imread(image);
        } else if (response.status === 404) {
          // this mod does not have this item. Fallback to default icons
          this.http404s.push(url);
        } else {
          console.error("Connection/server error?", response);
          return null;
        }
      }
    }

    // return default item
    let image = loadImage(getImgPath(item.imgPath));
    return cv.imread(image);
  }

  async getItemIcon(iconpack, item, crated, width, height) {
    let cache_key = JSON.stringify({
      "iconpack": iconpack,
      "item": item,
      "crated": crated,
      "width": width,
      "height": height
    }); // to force object content comparison
    let cached = this.cache.get(cache_key);
    if (typeof cached !== 'undefined') {
      return cached.clone();
    }

    let iconUnprocessedMat;
    if (inNodejs) {
      // special case in nodejs with local files
      iconUnprocessedMat = await this.localItemIconMat(item, iconpack);
    } else {
      // normal case in webbrowsers with http fetch
      iconUnprocessedMat = await this.loadItemIconMat(item, iconpack);
    }
    let iconMat = await this._prepareItem(iconUnprocessedMat, item, crated, width, height);
    iconUnprocessedMat.delete();

    this.cache.set(cache_key, iconMat.clone());
    return iconMat;
  }

  // returns mat of processed item
  async _prepareItem(inMat, item, crated, width, height) {
    let step = new cv.Mat();
    let dst = new cv.Mat();
    let rgbaPlanes = new cv.MatVector();
    cv.split(inMat, rgbaPlanes);
    let step2 = new cv.Mat();
    let step3 = new cv.Mat();
    let nilVal = new cv.Mat();
    rgbaPlanes.get(0).convertTo(nilVal, -1, 0, 0);
    let maxVal = new cv.Mat();
    nilVal.convertTo(maxVal, -1, 1, 255);
    let alphaMask = new cv.Mat();
    let mask = new cv.Mat();
    let gray = new cv.Mat();
    //cv.subtract(rgbaPlanes.get(0), rgbaPlanes.get(0), step2, mask);
    //cv.add(step2, step3, 254);
    rgbaPlanes.get(3).convertTo(alphaMask, cv.CV_32F, 1.0/256.0, 0);
    // bake alpha into R
    cv.multiply(rgbaPlanes.get(0), alphaMask, gray, 1.0/3.0, rgbaPlanes.get(0).type());
    // bake alpha into G
    cv.multiply(rgbaPlanes.get(1), alphaMask, step2, 1.0/3.0, rgbaPlanes.get(0).type());
    cv.add(gray, step2, step3, mask, rgbaPlanes.get(0).type());
    // bake alpha into B
    cv.multiply(rgbaPlanes.get(2), alphaMask, step2, 1.0/3.0, rgbaPlanes.get(0).type());
    cv.add(step3, step2, gray, mask, rgbaPlanes.get(0).type());
    resize(gray, dst, width, height);
    let withCrate;
    if (crated) {
      withCrate = await addCrate(dst, width, height);
    } else {
      withCrate = dst.clone();
    }
    let extraIconed = await addExtraIcon(withCrate, item, width, height);
    step.delete(); dst.delete(); rgbaPlanes.delete(); step2.delete(); step3.delete();
    nilVal.delete(); 
    maxVal.delete(); 
    alphaMask.delete(); 
    mask.delete(); 
    gray.delete(); 
    withCrate.delete();
    return extraIconed;
  }
}

