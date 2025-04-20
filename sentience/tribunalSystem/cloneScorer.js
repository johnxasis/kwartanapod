// Ranks clones by performance, selects for mutation
module.exports = function scoreClones(cloneArray) {
  const sorted = cloneArray.sort((a, b) => b.profit - a.profit);
  return {
    top10: sorted.slice(0, Math.ceil(sorted.length * 0.1)),
    bottom10: sorted.slice(-Math.ceil(sorted.length * 0.1))
  };
};