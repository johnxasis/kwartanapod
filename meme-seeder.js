const memes = [
  "Want $100 in AI tools for free? → https://t.me/YOUR_BOT_USERNAME",
  "Make your Telegram earn like a crypto vault 💰 Try it: https://t.me/YOUR_BOT_USERNAME",
  "AI isn’t replacing you. Someone *using this bot* will. Join the vault: https://t.me/YOUR_BOT_USERNAME"
];

const fs = require('fs');
fs.writeFileSync('public/meme.txt', memes[Math.floor(Math.random() * memes.length)]);
console.log("📡 Meme dropped.");
