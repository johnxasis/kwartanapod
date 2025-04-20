// Creates clone credits for redemption
let credits = {};

module.exports = {
  issueCredit: function(userId, amount = 25) {
    credits[userId] = (credits[userId] || 0) + amount;
    return `💰 $${amount} clone credit issued to ${userId}.`;
  },
  redeem: function(userId, useCase) {
    if ((credits[userId] || 0) <= 0) return "❌ No credits available.";
    credits[userId] -= 1;
    return `✅ Redeemed for: ${useCase}`;
  }
};