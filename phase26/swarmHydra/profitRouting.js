// Routes infinite affiliate profit chain
let chain = {};

module.exports = {
  registerUser: function(userId, referrerId) {
    chain[userId] = referrerId;
  },
  traceUp: function(userId, depth = 0) {
    if (!chain[userId] || depth > 1000) return [];
    return [chain[userId], ...this.traceUp(chain[userId], depth + 1)];
  }
};