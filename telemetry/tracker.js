// Basic clone action telemetry
let memory = [];

module.exports = {
  log: function(action, status) {
    memory.push({ action, status, timestamp: Date.now() });
    return `🔍 Logged: ${action} — ${status}`;
  },
  getLogs: () => memory.slice(-10)
};