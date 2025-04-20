// Routes clone earnings into on-chain staking vaults
module.exports = function allocateYield(cloneId, revenueUSD) {
  const staked = revenueUSD * 0.7;
  const treasury = revenueUSD * 0.3;
  return {
    cloneId,
    staked,
    treasury,
    txNote: "Yield deployed to synthetic staking system."
  };
};