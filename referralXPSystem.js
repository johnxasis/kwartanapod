// Tracks referrals and converts into XP + daily cap increases
module.exports = function updateXP(referrals) {
  const xp = referrals * 10;
  const dailyCap = Math.min(20 + xp, 100);
  const tier = xp >= 80 ? "Commander" : xp >= 40 ? "Strategist" : xp >= 10 ? "Builder" : "Worker";
  return { xp, dailyCap, tier };
};