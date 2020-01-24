const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const pixelmatch_options = {
	threshold: 0.1
};

const img1 = PNG.sync.read(fs.readFileSync('chromium.png'));
const img2 = PNG.sync.read(fs.readFileSync('firefox.png'));
const img3 = PNG.sync.read(fs.readFileSync('webkit.png'));
const {width, height} = img1;

// Diff chromium - firefox
let diff = new PNG({width, height});
pixelmatch(img1.data, img2.data, diff.data, width, height, pixelmatch_options);
fs.writeFileSync('diff_chromium_firefox.png', PNG.sync.write(diff));

// Diff chromium - webkit
diff = new PNG({width, height});
pixelmatch(img1.data, img3.data, diff.data, width, height, pixelmatch_options);
fs.writeFileSync('diff_chromium_webkit.png', PNG.sync.write(diff));

// Diff firefox - webkit
diff = new PNG({width, height});
pixelmatch(img2.data, img3.data, diff.data, width, height, pixelmatch_options);
fs.writeFileSync('diff_firefox_webkit.png', PNG.sync.write(diff));
