// Sends persuasive upgrade messages via Telegram when user hits cap
module.exports = function sendUpgradeNotice(username, tier, capHit, dailyEarned) {
  const messages = {
    free: `🔥 ${username}, you just hit your $20/day limit!
You're leaving money on the table. Upgrade to Pro now and unlock your full swarm.`,
    pro: `💡 ${username}, you’ve maxed out your bot growth for today. Go Elite to unlock 1,000 bots and unlock passive power.`,
    elite: `👑 ${username}, you are one step from Sovereign class. Unlimited GPTs, resale rights, and global swarm access await you.`
  };
  const msg = messages[tier] || "Upgrade available.";
  console.log("Telegram Message →", msg);
};
