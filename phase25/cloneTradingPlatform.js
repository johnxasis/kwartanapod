// Mock market for clone trading
let listings = [];

module.exports = {
  list: function(clone) {
    listings.push(clone);
    return "✅ Clone listed.";
  },
  viewMarket: function() {
    return listings.map(c => `${c.cloneName} | ${c.emoji} | Goal: ${c.mission}`).join("\n");
  }
};