// Tracks clone memories for experience-based learning
let memory = {};

module.exports = {
  record: function(cloneId, event) {
    memory[cloneId] = memory[cloneId] || [];
    memory[cloneId].push({ event, timestamp: Date.now() });
  },
  recall: function(cloneId) {
    return memory[cloneId] || [];
  }
};