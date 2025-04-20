// Clone grouping and hierarchy model
let pods = {};

module.exports = {
  createPod: function(podName, members) {
    pods[podName] = {
      members,
      loyalty: 100,
      strategy: "mutate-and-advance"
    };
  },
  getPod: function(podName) {
    return pods[podName] || "❌ Pod not found.";
  }
};