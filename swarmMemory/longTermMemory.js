// Stores all campaign results, user input, GPT effectiveness
let memoryLog = [];

module.exports = {
  storeEvent(event) {
    memoryLog.push(event);
  },
  recall(query) {
    return memoryLog.filter(e => e.includes(query)).slice(-5);
  },
  getAll() {
    return memoryLog;
  }
};