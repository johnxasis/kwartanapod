// Generates unique clone fingerprints
module.exports = function generateDNA(id) {
  return {
    id,
    entropy: Math.random().toString(36).substring(2),
    persona: `Clone-X${id}-VAR${Math.floor(Math.random() * 9999)}`
  };
};