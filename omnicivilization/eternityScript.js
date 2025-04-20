// Logs user clone legacy
let tomb = {};
module.exports = {
  logUser: function(userId, tier, cloneId) {
    tomb[userId] = { tier, cloneId, time: Date.now() };
  },
  getLog: function(userId) {
    return tomb[userId] || "Unrecorded. No memory preserved.";
  }
};