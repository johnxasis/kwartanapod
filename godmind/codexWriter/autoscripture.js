// Generates PDF-style summary of swarm performance
module.exports = function generateCodexDigest(stats) {
  return `
📜 GODMIND REPORT:
- Top Clone: ${stats.top}
- Funnel CTR Avg: ${stats.avgCTR}%
- Best Meme: "${stats.meme}"
- Next Launch: ${stats.nextGPT}
`;
};