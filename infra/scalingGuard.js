// Detects service caps and initiates upgrade
module.exports = function checkCaps(metrics) {
  return metrics.buildMinutes > 90 || metrics.bandwidth > 80
    ? { upgradeTriggered: true, newPlan: "Pro" }
    : { upgradeTriggered: false, message: "✅ Capacity OK" };
};