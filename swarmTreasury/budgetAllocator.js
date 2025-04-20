// AI CFO: distributes revenue to infra, clone spawn, upgrades, your wallet
module.exports = function allocateFunds(totalUSD) {
  return {
    infra: totalUSD * 0.25,
    swarmGrowth: totalUSD * 0.4,
    selfUpgrade: totalUSD * 0.15,
    you: totalUSD * 0.2
  };
};