// Publishes top clone battle leaderboard
module.exports = function renderLeaderboard(clones) {
  return clones
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 5)
    .map((c, i) => `#${i + 1} ${c.name} - $${c.profit}/day`)
    .join('\n');
};