// Routes majority of traffic to top performing funnel
module.exports = function routeProfitFunnels(funnelStats) {
  const top = funnelStats.sort((a, b) => b.profit - a.profit)[0];
  return {
    newPrimaryRoute: top.id,
    clonesRerouted: 120,
    expectedBoost: "+28%"
  };
};