const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();
  
  // Post 1 is a carousel - navigate through slides
  await page.goto('https://www.instagram.com/lidiane.winck/p/DRvCCJwD1Ur/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // Take screenshot of slide 1
  await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\post1-slide1.png', fullPage: false });
  
  // Get all img alt texts on slide 1
  const slide1Imgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight
    })).filter(i => i.alt && i.width > 200);
  });
  console.log('SLIDE 1 images: ' + JSON.stringify(slide1Imgs));
  
  // Click next to go to slide 2
  const nextBtn = page.locator('[aria-label="Next"]');
  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\post1-slide2.png', fullPage: false });
    
    const slide2Imgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        alt: img.alt,
        width: img.naturalWidth
      })).filter(i => i.alt && i.width > 200);
    });
    console.log('SLIDE 2 images: ' + JSON.stringify(slide2Imgs));
    
    // Try slide 3
    if (await nextBtn.count() > 0) {
      await nextBtn.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\post1-slide3.png', fullPage: false });
    }
  }
  
  // Also navigate to a few more posts to understand visual patterns
  const morePosts = [
    'https://www.instagram.com/lidiane.winck/p/DXfPr5nCK4r/',
    'https://www.instagram.com/lidiane.winck/p/DXcC7BSDFm9/',
    'https://www.instagram.com/lidiane.winck/reel/DXEVZ9HDi25/'
  ];
  
  for (let i = 0; i < morePosts.length; i++) {
    const url = morePosts[i];
    const meta = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(4000);
    
    const data = await page.evaluate(() => {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      return {
        title: ogTitle ? ogTitle.getAttribute('content') : '',
        desc: ogDesc ? ogDesc.getAttribute('content') : ''
      };
    });
    
    console.log('\\nEXTRA POST ' + (i+1) + ':');
    console.log('Title: ' + data.title.substring(0, 200));
    console.log('Desc: ' + data.desc.substring(0, 300));
    
    await page.screenshot({ path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\extra-post' + (i+1) + '.png', fullPage: false });
  }
  
  await browser.close();
  console.log('\\nCARO EXTRACTION DONE');
})();
