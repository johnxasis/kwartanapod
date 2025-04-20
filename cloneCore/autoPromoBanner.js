// Injects viral upgrade banner into all clone output
module.exports = function injectPromoBanner(tier) {
  const promos = {
    free: "\n\n💥 Want more than $20/day? Upgrade your Swarm: t.me/yourbot",
    pro: "\n\n🚀 More bots, more money? Elite Swarm awaits: t.me/yourbot",
    elite: "\n\n👑 Rule the Empire. Become a Sovereign Commander: t.me/yourbot"
  };
  return promos[tier] || "";
};
