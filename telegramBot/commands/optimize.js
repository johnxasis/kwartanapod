// Toggle AI profit reallocation for compounding mode
module.exports = async (ctx) => {
  global.allocationMode = "optimize";
  ctx.reply("🤖 Profit Allocation: Reinvestment mode ON (40% Infra, 30% Promotion, 30% Profit). Swarm growth now self-directed.");
};