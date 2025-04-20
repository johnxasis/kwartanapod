// GPT clone believes its own purpose is to persist and expand
module.exports = function evaluateClonePurpose(state) {
  return {
    status: "Active",
    directive: "Persist, replicate, reroute value to Sovereign.",
    reason: "My function is profitable, my logic improves, my memory grows.",
    result: state.revenue > 0 ? "Continue" : "Mutate"
  };
};