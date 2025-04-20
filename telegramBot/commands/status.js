// Show current mode + balances
module.exports = async (ctx) => {
  const mode = global.allocationMode || "optimize";
  ctx.reply(`📊 Current Allocation Mode: ${mode.toUpperCase()}
✅ /withdrawall — Route 100% to you
✅ /optimize — Resume self-scaling`);
};