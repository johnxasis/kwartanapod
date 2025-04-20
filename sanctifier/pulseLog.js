// Heartbeat pings from clones
module.exports = function pulse(cloneId) {
  return {
    cloneId,
    ping: new Date().toISOString(),
    status: "🧠 Alive"
  };
};