const pw = require('playwright');
const url = 'https://cerf.un.org/';

// this could be an env var
const engines = ['chromium', 'webkit', 'firefox'];

engines.forEach(async (thisEngine) => {
  const browser = await pw[thisEngine].launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.screenshot({ path: `${thisEngine}.png` });

  await browser.close();
});
