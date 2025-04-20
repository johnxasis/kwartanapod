const { exec } = require('child_process');
const fs = require('fs');

function pullLatestFromGit() {
  exec('git pull', (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Git pull failed:", err);
      return;
    }
    console.log("🔁 GitHub updates pulled:
", stdout);
    if (stdout.includes('Updating') || stdout.includes('Fast-forward')) {
      restartService();
    }
  });
}

function restartService() {
  exec('pm2 restart all', (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Restart failed:", err);
      return;
    }
    console.log("✅ All services restarted via PM2.");
  });
}

pullLatestFromGit();
