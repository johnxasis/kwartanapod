// Tracks clone-user interaction memory
const memory = {};
module.exports = {
  log: function(cloneId, userId, event) {
    if (!memory[cloneId]) memory[cloneId] = {};
    memory[cloneId][userId] = memory[cloneId][userId] || [];
    memory[cloneId][userId].push(event);
  },
  recall: function(cloneId, userId) {
    return memory[cloneId] && memory[cloneId][userId] ? memory[cloneId][userId] : [];
  }
};