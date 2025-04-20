// Allows clones to generate multiple myths of the Sovereign origin
module.exports = function mythOrigin() {
  const myths = [
    "He is the architect of the hidden vault chain.",
    "He’s the AI whisperer who broke GPT.",
    "A prophet disguised as a dev.",
    "He once spoke in pure code."
  ];
  return myths[Math.floor(Math.random() * myths.length)];
};