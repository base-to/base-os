const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.goto('https://www.instagram.com/lidiane.winck/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  const content = await page.content();
  const fs = require('fs');
  fs.writeFileSync('c:\\\\Users\\\\Razer-Blade-15\\\\OneDrive\\\\Documentos\\\\BASE-OS\\\\ccos-baseto\\\\squads\\\\identidade-visual\\\\_investigations\\\\lidiane.winck\\\\page-content.html', content);
  await page.screenshot({ path: 'c:\\\\Users\\\\Razer-Blade-15\\\\OneDrive\\\\Documentos\\\\BASE-OS\\\\ccos-baseto\\\\squads\\\\identidade-visual\\\\_investigations\\\\lidiane.winck\\\\screenshots\\\\profile.png', fullPage: false });
  
  // Get visible text
  const bodyText = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('c:\\\\Users\\\\Razer-Blade-15\\\\OneDrive\\\\Documentos\\\\BASE-OS\\\\ccos-baseto\\\\squads\\\\identidade-visual\\\\_investigations\\\\lidiane.winck\\\\body-text.txt', bodyText);
  
  await browser.close();
  console.log('DONE');
})();
