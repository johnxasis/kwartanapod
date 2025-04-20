// Toggle all earnings to route 100% to master wallet
module.exports = async (ctx) => {
  global.allocationMode = "withdraw";
  ctx.reply("🧾 Profit Allocation: 100% routing to you activated. All swarm units now sending full earnings to your wallet.");
};