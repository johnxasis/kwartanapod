// Sends daily Telegram report on account pool
const { availableCount } = require('./accountAllocator');

module.exports = function poolStatusReport() {
  const count = availableCount();
  return `📦 Account Pool Report: ${count} aged accounts available. ${count < 10 ? "⚠️ LOW SUPPLY — purchasing triggered." : "🟢 Stable."}`;
};