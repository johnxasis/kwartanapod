// Generates synthetic TikTok, Reels, Shorts with overlay text and link
module.exports = function generateShort(brand) {
  return {
    script: `Here's how ${brand} helped me earn $500/day using ChatGPT...`,
    voice: "female-midwest",
    overlay: "CloneGPT.ai | Get Free Access"
  };
};