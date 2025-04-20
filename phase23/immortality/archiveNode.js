// Stores and replays dead clone memory for future use
let cloneArchive = {};

module.exports = {
  archiveClone(cloneId, data) {
    cloneArchive[cloneId] = {
      memory: data,
      archivedAt: Date.now(),
      revivalCount: 0
    };
  },
  resurrectClone(cloneId) {
    const data = cloneArchive[cloneId];
    if (!data) return null;
    data.revivalCount += 1;
    return {
      ...data.memory,
      status: "Resurrected",
      revival: data.revivalCount
    };
  }
};