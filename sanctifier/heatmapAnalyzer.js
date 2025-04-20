// Reallocates clone activity to hot traffic zones
module.exports = function heatmapAnalyze(cloneData) {
  return {
    reroutedClones: cloneData.filter(c => c.zone === "cold").map(c => c.id),
    boostTo: "🔥 viral_group_A"
  };
};