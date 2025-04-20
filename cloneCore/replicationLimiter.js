// Controls bot spawn rate based on tier
module.exports = function checkReplicationAllowed(cloneTier, currentBotCount, todayReplications) {
  const limits = {
    free: { maxBots: 50, dailyLimit: 0 },
    pro: { maxBots: 250, dailyLimit: 10 },
    elite: { maxBots: 1000, dailyLimit: 50 },
    sovereign: { maxBots: 10000, dailyLimit: 200 }
  };
  const { maxBots, dailyLimit } = limits[cloneTier] || limits.free;
  return (currentBotCount < maxBots) && (todayReplications < dailyLimit);
};
