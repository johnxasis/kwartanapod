// Displays current referral and cap info
module.exports = function getStatus(userReferrals = 0) {
  const botsUnlocked = userReferrals * 10;
  const cap = 20 + userReferrals * 10;
  const limitedCap = cap > 100 ? 100 : cap;
  return `📊 Referral Status:\nReferred: ${userReferrals}\nBots Unlocked: ${botsUnlocked} (+50 max)\nDaily Cap: $${limitedCap}/day`;
};
