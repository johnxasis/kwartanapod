// Yield distribution logic
module.exports.splitProfit = (total) => {
  return {
    toYou: total * 0.4,
    toInfra: total * 0.3,
    toReplicate: total * 0.3
  };
};