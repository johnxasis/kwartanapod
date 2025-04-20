// Telegram Master Bot summary panel generator
module.exports = function generateLiveView(swarmStats) {
  return {
    mutationsToday: swarmStats.mutations,
    topClone: swarmStats.top,
    funnelCTR: swarmStats.ctr,
    suggestion: "Inject viral meme pack #7. Trend: ego + automation.",
    overrideCommand: "/reprogramAll"
  };
};