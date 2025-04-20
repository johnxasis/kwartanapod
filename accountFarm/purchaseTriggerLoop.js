// Automatically buys accounts if pool drops below threshold
const { availableCount, addAccount } = require('./accountAllocator');
const buyAccount = require('./marketplaceAPI');

module.exports = async function autoPurchase(token) {
  const threshold = 10;
  const current = availableCount();
  if (current >= threshold) return "✅ Pool healthy. No purchase needed.";

  const needed = threshold - current + 5;
  const response = await buyAccount("gmail-aged", token, needed);
  response.accounts.forEach(acc => addAccount({ ...acc, assigned: false }));
  return `🛒 Purchased ${needed} aged accounts. Pool replenished.`;
};