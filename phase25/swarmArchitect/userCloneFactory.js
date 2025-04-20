// Users define and spawn their own clone logic
module.exports = function generateUserClone(config) {
  return {
    cloneName: config.name,
    emoji: config.emoji,
    mission: config.mission || "💰 Monetize and multiply",
    revenueRoute: "Sovereign",
    identity: `Clone-${Date.now()}`
  };
};