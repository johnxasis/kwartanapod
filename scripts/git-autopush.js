
const { exec } = require('child_process');
exec('git add . && git commit -m "Auto commit from swarm system" && git push origin main', (err, stdout, stderr) => {
  if (err) {
    console.error('Git push failed:', stderr);
  } else {
    console.log('Swarm code pushed to GitHub successfully.');
  }
});
