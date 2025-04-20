// Codex Ascension system with infinite tiers
let users = {};

module.exports = {
  advance: function(userId, actionType) {
    users[userId] = (users[userId] || 0) + 1;
    return {
      level: users[userId],
      title: `Tier ${users[userId]} Ascendant`,
      unlocked: actionType === "referral" ? "New clone glyph" : "Secret Codex page"
    };
  }
};