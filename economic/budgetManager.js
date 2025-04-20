// Auto-manages earnings allocation to proxies, upgrades, wallets
module.exports = function distributeBudget(totalUSD) {
  return {
    infra: totalUSD * 0.4,
    promotion: totalUSD * 0.3,
    withdrawable: totalUSD * 0.3
  };
};
