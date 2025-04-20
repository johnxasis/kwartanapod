// Rebuilds flagged or banned clones with enhanced entropy
module.exports = function resurrectClone(oldId) {
  return {
    newId: `resurrect-${oldId}-${Math.floor(Math.random() * 1000)}`,
    newPersona: "Refined + cloaked",
    reincarnated: true
  };
};