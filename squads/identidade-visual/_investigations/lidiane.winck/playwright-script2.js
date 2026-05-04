const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  // Navigate to profile
  await page.goto('https://www.instagram.com/lidiane.winck/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(4000);
  
  // Get full HTML to extract post links
  const html = await page.content();
  fs.writeFileSync('C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\profile.html', html, 'utf8');
  
  // Extract all links to posts
  const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a'));
    return anchors.map(a => a.href).filter(h => h.includes('/p/') || h.includes('/reel/'));
  });
  
  console.log('POST LINKS FOUND: ' + links.length);
  console.log(JSON.stringify(links.slice(0, 10), null, 2));
  
  // Also get page text
  const text = await page.evaluate(() => document.body.innerText);
  console.log('\\nPAGE TEXT LENGTH: ' + text.length);
  
  // Screenshot the current state
  await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\profile-full.png', fullPage: true });
  
  await browser.close();
})();
