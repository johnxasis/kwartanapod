const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUseragent = require('random-useragent');

puppeteer.use(StealthPlugin());

async function postMemeToReddit(memeText) {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent(randomUseragent.getRandom());
  await page.setViewport({ width: 1280 + Math.floor(Math.random() * 100), height: 800 + Math.floor(Math.random() * 100) });

  try {
    await page.goto('https://www.reddit.com/login', { waitUntil: 'networkidle2' });

    // Simulated login (placeholder - replace with real creds for private use only)
    await page.type('#loginUsername', 'YOUR_REDDIT_USERNAME', { delay: 100 });
    await page.type('#loginPassword', 'YOUR_PASSWORD', { delay: 100 });
    await Promise.all([page.click('button[type="submit"]'), page.waitForNavigation({ waitUntil: 'networkidle2' })]);

    await page.goto('https://www.reddit.com/r/SideHustle/submit', { waitUntil: 'networkidle2' });

    await page.type('input[name="title"]', memeText.substring(0, 300), { delay: 100 });
    await page.type('textarea', memeText, { delay: 80 });

    await page.click('button[type="submit"]');

    console.log("✅ Meme posted stealthily.");
  } catch (err) {
    console.error("⚠️ Posting failed:", err);
  } finally {
    await browser.close();
  }
}

postMemeToReddit("🔥 GPT bots made me $500 in 3 days. Here's how → https://bit.ly/vaultexe1");
