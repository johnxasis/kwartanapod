// Special drop only visible to crypto unlocks
module.exports = function getCryptoDrop(unlocked = false) {
  if (!unlocked) return "🔐 This drop is locked. Unlock it using crypto to access.";
  return "🧠 Codex Blackfile #7: Forbidden Tokenomics Script + GPT Prompt Chain for Hyperviral Funnels";
};