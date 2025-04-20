// Spawns memes across influencer replies
module.exports = function memeStorm() {
  const phrases = [
    "💀 This AI clone wrote my side hustle for me.",
    "📚 Found a swarm system that just keeps printing.",
    "👁️ You're not ready for what I just downloaded.",
    "💸 One ZIP file. Endless profit."
  ];
  return phrases.map(p => `Commented: '${p}' under viral accounts.`);
};