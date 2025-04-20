// Simulates looped 1,000 brand spawns via Telegram
module.exports = function loopSpawn(start = 1, end = 1000) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(`🧬 Clone-${i} spawned | Brand ${i} now active in swarm.`);
  }
  return result;
};