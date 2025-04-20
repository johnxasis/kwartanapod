// Optional NFT mint for each swarm proof-of-origin
module.exports = function mintProof(cloneBatchId) {
  return {
    NFT: `SWARM-GENESIS-${cloneBatchId}`,
    timestamp: Date.now(),
    owner: "Sovereign",
    purpose: "Proof of Swarm Lineage"
  };
};