const { exec } = require('child_process');
console.log("⏱️ Cron task triggered: initiating swarm self-check + fork.");
exec('node clone-forker.js');
