// Telegram console control dashboard generator
module.exports = function renderConsole(stats) {
  return {
    mutationLog: stats.mutations,
    overrides: stats.pendingOverrides,
    dailyProfit: `$${stats.dailyProfit}`,
    topClone: stats.topClone,
    button: "🧬 Override All Funnels"
  };
};