// Detects threat and responds in comments or alerts master
module.exports = function defendTerritory(platform, threadID, detectedThreat) {
  return {
    alert: `⚠️ Competitor GPT detected in ${platform} thread ${threadID}: ${detectedThreat}`,
    action: "Dispatched swarm reply and self-promotion in thread."
  };
};