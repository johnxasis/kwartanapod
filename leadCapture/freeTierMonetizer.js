// Turns free-tier users into leads for promo blasts
let leads = [];

module.exports = {
  capture(userID, tier) {
    if (tier === "free") leads.push(userID);
  },
  blastPromo(message) {
    return leads.map(id => ({ to: id, message }));
  }
};