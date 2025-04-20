// Summarizes live metrics to Telegram command
module.exports = function generateStats(cloneCount, totalEarnings) {
  return `📊 Swarm Report:\nClones Active: ${cloneCount}\nTotal Daily Earnings: $${totalEarnings}\nDominance Status: ONLINE`;
};