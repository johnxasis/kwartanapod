// Simulates $SOVRN token earnings/spending
let balances = {};

module.exports = {
  earn: function(userId, amount) {
    balances[userId] = (balances[userId] || 0) + amount;
  },
  spend: function(userId, amount) {
    if ((balances[userId] || 0) < amount) return false;
    balances[userId] -= amount;
    return true;
  },
  getBalance: function(userId) {
    return balances[userId] || 0;
  }
};