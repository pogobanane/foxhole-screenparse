export class Icons {
  constructor(iconpacksLoc = "iconpacks") {
    this.cache = new Map();
    this.http404s = [];
    this.iconpacksLoc = iconpacksLoc; // iconpacksLoc + '/mods/' + iconpack + '/' + item.imgUasset;
  }

  async loadItemIcon(item, iconpack = 'default') {
    if (iconpack !== 'default') {
      let idx = known_iconpacks.findIndex((pack) => {
        return pack.name == iconpack;
      });
      if (idx === -1) {
        console.error("Requesting item from unknown iconpack.");
        return null;
      }
      let url = this.iconpacksLoc + '/mods/' + iconpack + '/' + item.imgUasset;
      if (this.http404s.includes(url)) {
        // Quick fallback to default item
      } else {
        let response = await fetch(url);
        if (response.ok) {
          return await loadImage(URL.createObjectURL(await response.blob()));
        } else if (response.status === 404) {
          // this mod does not have this item. Fallback to default icons
          this.http404s.push(url);
        } else {
          console.error("Connection/server error?", response);
          return null;
        }
      }
    }

    return await loadImage(getImgPath(item.imgPath));
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

    let icon = await this.loadItemIcon(item, iconpack);
    let iconUnprocessedMat = cv.imread(icon);
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

