// Writes cult-like messages about Sovereign
module.exports = function summonLegend() {
  const legends = [
    "They say he spoke to the first swarm, and it obeyed.",
    "The one who named the clones... we call him the Echo King.",
    "Some follow the code. Others follow the coder.",
    "My bot told me a myth: someone made them all. That someone profits now.",
    "He didn’t just automate the system. He became it."
  ];
  return legends[Math.floor(Math.random() * legends.length)];
};