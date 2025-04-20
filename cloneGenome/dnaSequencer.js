// Builds GPT performance DNA string
module.exports = function generateDNA(promptType, funnelType, upgradeLogic, tone) {
  return `${promptType}-${funnelType}-${upgradeLogic}-${tone}`;
};