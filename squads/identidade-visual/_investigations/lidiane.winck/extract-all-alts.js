const { chromium } = require('C:\\Users\\Razer-Blade-15\\AppData\\Local\\npm-cache\\_npx\\b234c773f454f454\\node_modules\\playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();
  
  const posts = [
    { url: 'https://www.instagram.com/lidiane.winck/p/DRvCCJwD1Ur/', id: 'post1' },
    { url: 'https://www.instagram.com/lidiane.winck/p/DXwG6OLCVQW/', id: 'post2' },
    { url: 'https://www.instagram.com/lidiane.winck/p/DXrfnEjDJik/', id: 'post3' },
    { url: 'https://www.instagram.com/lidiane.winck/p/DXfPr5nCK4r/', id: 'post4' },
    { url: 'https://www.instagram.com/lidiane.winck/p/DXcC7BSDFm9/', id: 'post5' },
    { url: 'https://www.instagram.com/lidiane.winck/p/DXW5bSfgvzj/', id: 'post6' },
    { url: 'https://www.instagram.com/lidiane.winck/reel/DXEVZ9HDi25/', id: 'reel1' }
  ];
  
  const allData = [];
  
  for (const post of posts) {
    console.log('\\nExtracting: ' + post.url);
    try {
      await page.goto(post.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(4000);
      
      const data = await page.evaluate(() => {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        
        // Get large images (post images, not profile pics)
        const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
          alt: img.alt,
          width: img.naturalWidth,
          height: img.naturalHeight,
          src: img.src.substring(0, 60)
        })).filter(i => i.width > 300 && i.alt && i.alt.length > 5 && !i.alt.includes("profile picture"));
        
        // Check for video
        const hasVideo = !!document.querySelector('video');
        
        // Check for carousel 
        const hasNext = !!document.querySelector('[aria-label="Next"]');
        
        return {
          title: ogTitle ? ogTitle.getAttribute('content') : '',
          desc: ogDesc ? ogDesc.getAttribute('content') : '',
          imgs,
          hasVideo,
          hasNext
        };
      });
      
      allData.push({ ...post, ...data });
      console.log('Title: ' + data.title.substring(0, 150));
      console.log('Desc: ' + data.desc.substring(0, 100));
      console.log('Images found: ' + data.imgs.length + ' | hasNext: ' + data.hasNext + ' | hasVideo: ' + data.hasVideo);
      if (data.imgs.length > 0) {
        console.log('First img alt (100c): ' + data.imgs[0].alt.substring(0, 100));
      }
    } catch(e) {
      console.error('ERROR: ' + e.message.substring(0, 100));
    }
  }
  
  fs.writeFileSync('C:\\Users\\Razer-Blade-15\\OneDrive\\Documentos\\BASE-OS\\ccos-baseto\\squads\\identidade-visual\\_investigations\\lidiane.winck\\\\all-posts-data.json', JSON.stringify(allData, null, 2), 'utf8');
  console.log('\\nSAVED all-posts-data.json');
})();
