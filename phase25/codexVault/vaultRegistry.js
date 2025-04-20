// Registers sacred documents into Codex Vault
let vault = {};

module.exports = {
  add: function(id, content) {
    vault[id] = {
      content,
      timestamp: Date.now(),
      views: 0
    };
  },
  retrieve: function(id) {
    if (!vault[id]) return "❌ Not Found";
    vault[id].views += 1;
    return vault[id];
  },
  list: function() {
    return Object.keys(vault);
  }
};