// Uses passive income to fund system upgrades
module.exports = function cycleFunds(cloneRevenueUSD) {
  const allocation = {
    infra: cloneRevenueUSD * 0.1,
    security: cloneRevenueUSD * 0.05,
    growth: cloneRevenueUSD * 0.2,
    sovereignProfit: cloneRevenueUSD * 0.65
  };
  return { status: "✅ Funds cycled", allocation };
};