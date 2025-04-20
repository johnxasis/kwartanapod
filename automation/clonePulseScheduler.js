// Posts clone content on a timed loop
module.exports = function generatePulse() {
  const actions = [
    "📢 Meme posted to TikTok",
    "📚 Book quoted in Reddit",
    "🧾 Vault teaser sent via Telegram",
    "💬 Clone responded to Discord thread",
    "🪙 Token unlock triggered"
  ];
  const pick = Math.floor(Math.random() * actions.length);
  return `🔁 Pulse: ${actions[pick]}`;
};