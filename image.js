// taken from https://stackoverflow.com/questions/37854355/wait-for-image-loading-to-complete-in-javascript
const loadImage = async function(imageUrl) {
    let img;
    const imageLoadPromise = new Promise(resolve => {
        img = new Image();
        img.onload = resolve;
	img.crossOrigin = "anonymous"; // without this opencv imread throws "this operation is unsecure"
        img.src = imageUrl;
    });

    await imageLoadPromise;
    return img;
}

// Borrowed from docs.opencv.org sources
const loadImageToCanvas = async function(url, domCanvas) {
  let ctx = domCanvas.getContext('2d');
  let img = await loadImage(url);
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
}

const clearCanvas = async (domCanvas) => {
  const context = domCanvas.getContext('2d');
  context.clearRect(0, 0, domCanvas.width, domCanvas.height);
}

