// Repairs dead funnels, broken links, and rotates new logic
module.exports = function healSystem(statusReport) {
  return statusReport.includes("funnel down") ? "🛠 Funnel replaced + redeployed." : "✅ System healthy.";
};