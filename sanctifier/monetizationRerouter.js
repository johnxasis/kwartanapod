// Moves non-performing clones to fallback profit streams
module.exports = function reroute(cloneId, revenue) {
  return revenue < 5
    ? { cloneId, rerouted: true, newTarget: "https://gumroad.com/high-convert" }
    : { cloneId, rerouted: false };
};