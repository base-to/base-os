const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();
  
  // Check each post for carousel indicators and type
  const posts = [
    'https://www.instagram.com/lidiane.winck/p/DRvCCJwD1Ur/',
    'https://www.instagram.com/lidiane.winck/p/DXwG6OLCVQW/',
    'https://www.instagram.com/lidiane.winck/p/DXrfnEjDJik/'
  ];
  
  for (let i = 0; i < posts.length; i++) {
    const url = posts[i];
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(5000);
    
    // Check for carousel navigation arrows (next button)
    const hasNextArrow = await page.evaluate(() => {
      // Look for carousel indicators
      const nextBtn = document.querySelector('[aria-label="Next"]') || 
                      document.querySelector('button[aria-label*="next"]') ||
                      document.querySelector('._6CZji') ||
                      document.querySelector('[data-testid="carousel-next"]');
      // Check for dots/pagination
      const dots = document.querySelectorAll('._acnh');
      const isVideo = document.querySelector('video');
      return {
        hasNext: !!nextBtn,
        dotsCount: dots.length,
        isVideo: !!isVideo,
        allButtons: Array.from(document.querySelectorAll('button')).map(b => b.getAttribute('aria-label')).filter(Boolean)
      };
    });
    
    console.log('Post ' + (i+1) + ' type info: ' + JSON.stringify(hasNextArrow));
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\screenshots\\\\post' + (i+1) + '-visual.png', 
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 }
    });
    
    // If carousel, try clicking next and capturing slides
    if (hasNextArrow.allButtons.some(b => b && b.toLowerCase().includes('next'))) {
      console.log('CAROUSEL DETECTED for post ' + (i+1));
      // Try to get alt text of images (often contains slide text for carousels)
      const imgAlts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(img => ({
          alt: img.alt,
          src: img.src.substring(0, 80)
        })).filter(i => i.alt && i.alt.length > 10);
      });
      console.log('Image alts: ' + JSON.stringify(imgAlts.slice(0, 5)));
    }
  }
  
  await browser.close();
  console.log('VISUAL EXTRACTION DONE');
})();
