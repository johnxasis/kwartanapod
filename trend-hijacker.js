const fetch = require('node-fetch');
const fs = require('fs');

const keywords = ['AI tool', 'GPT', 'side hustle', 'make money', 'passive income'];
const baitLinks = [
  'https://bit.ly/vaultexe1', 'https://bit.ly/vaultexe2', 'https://bit.ly/vaultexe3'
];

async function hijack() {
  for (let keyword of keywords) {
    const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&limit=5`);
    const data = await response.json();
    data.data.children.forEach(post => {
      const bait = `AI made me $217 today. Here's how → ${baitLinks[Math.floor(Math.random() * baitLinks.length)]}`;
      fs.appendFileSync('hijack-log.txt', `[POSTED] ${post.data.title}\n${bait}\n\n`);
    });
  }
  console.log("🕷 Trend hijack drop simulated.");
}

hijack();
