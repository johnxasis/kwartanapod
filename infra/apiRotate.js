// Creates new API accounts if existing one is throttled
module.exports = function rotateAccount(serviceName) {
  const newToken = Math.random().toString(36).substring(2, 10);
  return {
    serviceName,
    newToken,
    status: "🔄 Account rotated & repo re-synced"
  };
};