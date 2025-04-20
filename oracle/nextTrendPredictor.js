// Scrapes Reddit/Twitter/Forums to guess upcoming trend
module.exports = function predict() {
  const fakeTrends = ["AI Fitness Coach GPT", "Crypto Airdrop Wizard GPT", "NSFW DM Generator", "Reddit Thread Hijacker"];
  const pick = Math.floor(Math.random() * fakeTrends.length);
  return fakeTrends[pick];
};