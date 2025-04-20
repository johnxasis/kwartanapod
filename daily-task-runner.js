const { exec } = require('child_process');
console.log("🔁 Running daily vault shuffle and meme drop...");
exec('node meme-seeder.js');
