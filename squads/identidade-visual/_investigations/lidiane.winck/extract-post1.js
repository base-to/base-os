const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  const posts = [
    'https://www.instagram.com/lidiane.winck/p/DRvCCJwD1Ur/',
    'https://www.instagram.com/lidiane.winck/p/DXwG6OLCVQW/',
    'https://www.instagram.com/lidiane.winck/p/DXrfnEjDJik/'
  ];
  
  const results = [];
  
  for (let i = 0; i < posts.length; i++) {
    const url = posts[i];
    console.log('\\n--- Extracting post ' + (i+1) + ': ' + url);
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(5000);
      
      const text = await page.evaluate(() => document.body.innerText);
      const html = await page.content();
      
      // Save screenshot
      const ssPath = 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\post' + (i+1) + '.png';
      await page.screenshot({ path: ssPath, fullPage: true });
      
      // Extract structured data
      const data = await page.evaluate(() => {
        // Try to get caption
        const captionEl = document.querySelector('h1') || document.querySelector('[data-testid="post-comment-root"]') || document.querySelector('._a9zs');
        const caption = captionEl ? captionEl.innerText : '';
        
        // Get all text
        const allText = document.body.innerText;
        
        // Get meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        const metaDescContent = metaDesc ? metaDesc.getAttribute('content') : '';
        
        // Get og:description
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogDescContent = ogDesc ? ogDesc.getAttribute('content') : '';
        
        // Get title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogTitleContent = ogTitle ? ogTitle.getAttribute('content') : '';
        
        return { caption, allText, metaDescContent, ogDescContent, ogTitleContent };
      });
      
      fs.writeFileSync('C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\post' + (i+1) + '-text.txt', data.allText, 'utf8');
      fs.writeFileSync('C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\post' + (i+1) + '-meta.txt', 
        'URL: ' + url + '\\n' +
        'OG Title: ' + data.ogTitleContent + '\\n' +
        'OG Description: ' + data.ogDescContent + '\\n' +
        'Meta Description: ' + data.metaDescContent + '\\n\\n' +
        'Page Text:\\n' + data.allText, 'utf8');
      
      console.log('OG TITLE: ' + data.ogTitleContent);
      console.log('OG DESC: ' + data.ogDescContent.substring(0, 300));
      console.log('PAGE TEXT (500c): ' + data.allText.substring(0, 500));
      
      results.push({ url, ...data });
    } catch(e) {
      console.error('ERROR on post ' + (i+1) + ': ' + e.message);
    }
  }
  
  await browser.close();
  console.log('\\nDONE - extracted ' + results.length + ' posts');
})();
