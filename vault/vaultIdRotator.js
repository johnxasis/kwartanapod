// Returns obfuscated vault ID for each user
module.exports = function vaultFor(userId) {
  const hash = userId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const variant = (hash % 5) + 1;
  return `vault_codex_${variant}`;
};