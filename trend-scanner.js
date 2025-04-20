const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');

puppeteer.use(StealthPlugin());

const trendingKeywords = ['AI tool', 'passive income', 'GPT profit', 'automate earnings', 'make money'];

async function scanTrends() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.threads.net/search?q=ai', { waitUntil: 'networkidle2' });

  const posts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article')).slice(0, 5).map(e => e.innerText);
  });

  const matches = posts.filter(p => trendingKeywords.some(k => p.toLowerCase().includes(k.toLowerCase())));
  fs.writeFileSync('trend-captures.txt', matches.join("\n---\n"));

  console.log("🧠 Trends matched:", matches.length);
  await browser.close();
}

scanTrends();
