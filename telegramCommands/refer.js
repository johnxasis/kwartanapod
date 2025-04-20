// Generates a referral link and tracks referrals
module.exports = function handleReferCommand(userID) {
  const link = `https://t.me/yourMainBot?start=ref-${userID}`;
  return `🔗 Your referral link: ${link}\nEarn +10 bots & +$10 cap per paying upgrade referred. Max cap: $100/day.`;
};
