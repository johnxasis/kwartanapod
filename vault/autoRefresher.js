// Rotates vault drops daily
const drops = [
  "Notion template drop",
  "GPT prompt bundle",
  "Hidden Codex quote",
  "Micro-course PDF",
  "Token unlock bonus"
];

module.exports = function refreshVault() {
  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % drops.length;
  return `🧬 New Vault Drop: ${drops[index]}`;
};