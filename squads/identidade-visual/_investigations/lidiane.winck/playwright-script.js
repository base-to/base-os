const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  try {
    await page.goto('https://www.instagram.com/lidiane.winck/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(6000);
    const bodyText = await page.evaluate(() => document.body.innerText);
    const fs = require('fs');
    fs.writeFileSync('C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\body-text.txt', bodyText, 'utf8');
    await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\screenshots\\profile.png', fullPage: false });
    console.log('TEXT SAVED, length: ' + bodyText.length);
    console.log('FIRST 1500 CHARS:\\n' + bodyText.substring(0, 1500));
  } catch(e) {
    console.error('ERROR: ' + e.message);
  }
  await browser.close();
})();
