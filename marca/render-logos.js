const { chromium } = require('playwright');
const path = require('path');

const logos = [
  { html: 'logo-principal.html', out: 'logo-principal.png' },
  { html: 'logo-negativa.html', out: 'logo-negativa.png' },
  { html: 'logo-monocromatico.html', out: 'logo-monocromatico.png' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 800 });

  for (const { html, out } of logos) {
    const filePath = 'file://' + path.resolve(__dirname, html).replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.resolve(__dirname, out) });
    console.log('Rendered:', out);
  }

  await browser.close();
  console.log('Done.');
})();
