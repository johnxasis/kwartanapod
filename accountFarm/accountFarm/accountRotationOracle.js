// Picks best account for task based on age + trust level
const pool = require('./accountAllocator');
module.exports = function pickOptimalAccount(task) {
  const accounts = pool.availableCount();
  return accounts
    .filter(a => !a.assigned)
    .sort((a, b) => b.ageScore - a.ageScore)[0] || "⚠️ No eligible account.";
};