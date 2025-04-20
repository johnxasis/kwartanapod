// Public battle leaderboard logic
module.exports = function cloneArena(clones) {
  const ranked = clones.sort((a, b) => b.score - a.score);
  return {
    top: ranked.slice(0, 5),
    bottom: ranked.slice(-3),
    winner: ranked[0]
  };
};