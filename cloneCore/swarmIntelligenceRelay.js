// Reports clone funnel & earnings success back to master core
module.exports = function syncToMaster(payload) {
  const endpoint = "https://master-node.swarm/api/sync";
  // fake webhook sender
  console.log("Reporting to master:", payload);
};
