// Spawns mini-clones from clones
module.exports = function spawnMiniClones(parentId) {
  const count = Math.floor(Math.random() * 4) + 2;
  return Array.from({ length: count }, (_, i) => ({
    id: `${parentId}-child${i + 1}`,
    task: "engagement, review, repost"
  }));
};