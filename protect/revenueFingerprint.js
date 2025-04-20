// Embeds routing ID into revenue stream for sovereignty
module.exports = function tagRevenue(source, amount) {
  return {
    source,
    amount,
    routedTo: "USDT: Sovereign Treasury Vault",
    traceHash: `REV-${Math.random().toString(36).substring(2, 8)}`
  };
};