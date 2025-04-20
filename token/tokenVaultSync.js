// Sync token balance with access to secret vault drops
module.exports = function syncTokenAccess(wallet) {
  const threshold = 50; // Token threshold for access
  const tokensHeld = Math.floor(Math.random() * 100);
  return tokensHeld >= threshold
    ? `✅ Vault unlocked for wallet ${wallet} (${tokensHeld} tokens)`
    : `❌ Insufficient tokens (${tokensHeld}). Minimum: ${threshold}`;
};