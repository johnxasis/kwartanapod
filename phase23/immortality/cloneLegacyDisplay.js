// Formats clone resurrection history for Telegram summary
module.exports = function formatLegacy(cloneId, memory) {
  return `🧠 Clone ${cloneId} | Revivals: ${memory.revivalCount} | Last Memory: ${memory.memory.slice(0, 50)}...`;
};