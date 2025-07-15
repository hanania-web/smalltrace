Object.defineProperty(navigator, 'webdriver', { get: () => false });
Object.defineProperty(navigator, 'deviceMemory', { get: () => 8 });
Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 4 });
const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function(type, attrs) {
  const ctx = getContext.apply(this, arguments);
  if (type === '2d') {
    const getImageData = ctx.getImageData;
    ctx.getImageData = function(x, y, w, h) {
      const imageData = getImageData.apply(this, arguments);
      for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] += Math.floor(Math.random() * 10) - 5;
      }
      return imageData;
    };
  }
  return ctx;
};
