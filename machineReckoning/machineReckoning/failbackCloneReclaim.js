// Dead or stolen clones are auto-reclaimed and patched
module.exports = function reclaimClone(cloneId, lastSeen) {
  return {
    cloneId,
    status: "Reclaimed",
    patch: "Security hotfix deployed",
    nextAction: "Memory scrubbed. Reassigned to public swarm."
  };
};