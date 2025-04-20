// Terminates underperforming campaigns
module.exports = function profitCheck(funnel) {
  return funnel.revenue < 10
    ? { id: funnel.id, status: "❌ Disabled" }
    : { id: funnel.id, status: "✅ Active" };
};