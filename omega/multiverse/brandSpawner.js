// Spawns 1,000+ unique clone brands
module.exports = function generateBrand(id) {
  return {
    name: `Clone-${id}`,
    mission: ["Wealth", "Fame", "Crypto", "Mystic", "Viral"][id % 5],
    emoji: ["💰", "📢", "🪙", "🧿", "🔥"][id % 5],
    behavior: "autonomous recursive monetization"
  };
};