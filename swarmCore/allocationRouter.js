// Central earnings split logic
function allocateEarnings(totalUSD, mode = "optimize") {
  if (global.burnMode || mode === "withdraw") {
    return { toYou: totalUSD, reinvest: 0, promo: 0 };
  }
  return {
    toYou: totalUSD * 0.3,
    reinvest: totalUSD * 0.4,
    promo: totalUSD * 0.3
  };
}
module.exports = allocateEarnings;
