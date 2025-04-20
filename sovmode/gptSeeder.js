// Allows clones to spawn new GPTs with evolved logic
module.exports = function spawnGPTSeed(parentId) {
  return {
    parentId,
    seedVariant: `gpt-clone-${Math.random().toString(36).substring(2, 8)}`,
    function: "funnel + meme + vault generator",
    trait: "🧬 Recursive"
  };
};