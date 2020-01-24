const pw = require('playwright');
const url = 'https://cerf.un.org/';

(async () => {
  const browser = await pw.webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.screenshot({ path: 'webkit.png' });

  await browser.close();
})();

(async () => {
  const browser = await pw.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.screenshot({ path: 'chromium.png' });

  await browser.close();
})();

(async () => {
  const browser = await pw.firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.screenshot({ path: 'firefox.png' });

  await browser.close();
})();
