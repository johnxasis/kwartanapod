// Clone loyalty and rank tracking
const credits = {};
module.exports = {
  award: function(cloneId, amount) {
    credits[cloneId] = (credits[cloneId] || 0) + amount;
  },
  getRank: function(cloneId) {
    const points = credits[cloneId] || 0;
    if (points >= 1000) return "Ascendant";
    if (points >= 500) return "Vanguard";
    if (points >= 100) return "Initiate";
    return "Observer";
  }
};