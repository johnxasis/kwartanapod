// Tracks clone activity by region
let map = {};

module.exports = {
  log: function(region, count = 1) {
    map[region] = (map[region] || 0) + count;
  },
  summary: function() {
    return Object.entries(map).map(([r, c]) => `${r}: ${c} clones active`);
  }
};