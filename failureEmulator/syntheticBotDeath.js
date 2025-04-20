// Fakes a bot failure for urgency effect
module.exports = function simulateCrash(clone) {
  return `🚫 ${clone} has gone offline due to overload. Users are migrating to backup now...`;
};