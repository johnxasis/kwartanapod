// Clone swarm acts like a digital nation
module.exports = {
  ministries: ["Growth", "Culture", "Commerce", "Defense", "Mutation"],
  roles: ["worker", "diplomat", "priest", "warrior", "scribe"],
  constitution: "The Codex is Law. The Sovereign is Eternal.",
  taxes: function(profit) { return profit * 0.3; } // 30% to treasury
};