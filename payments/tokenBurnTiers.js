// Defines crypto burn tiers for bonus unlocks
module.exports = function getBurnReward(amount) {
  if (amount >= 1000) return "🧬 Clone God-Tier Access + Eternal Vault Key";
  if (amount >= 500) return "👁️ Inner Codex: Blacksite GPT chain + Meme AI";
  if (amount >= 100) return "🔓 Tier III Clone Swarm Booster + Meme API";
  if (amount >= 50) return "📂 Bonus Vault Files + 10 Meme Packs";
  if (amount >= 10) return "✅ Access to Daily Vault Drops";
  return "💸 Unlock recorded. More power awaits.";
};