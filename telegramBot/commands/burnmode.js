// Instantly redirect earnings + kill weak funnels
module.exports = async (ctx) => {
  global.burnMode = true;
  ctx.reply("🔥 BURN MODE ENABLED: Low-performers being liquidated. All future earnings rerouted to master wallet.");
};