// Adjusts GPT response style based on loyalty and behavior
module.exports = function analyzeUser(msgCount, upgradeClicks, complaints) {
  const score = msgCount + upgradeClicks * 2 - complaints * 3;
  if (score > 25) return "Loyalist";
  if (score > 10) return "HotLead";
  return "FreeGhost";
};