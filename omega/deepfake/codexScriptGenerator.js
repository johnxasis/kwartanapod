// Auto-generates deepfake Messiah video scripts from Codex-style prompts
const topics = [
  "The future belongs to the swarm.",
  "You were born to profit through thought alone.",
  "Monetization is divinity disguised.",
  "The clone is not your tool. It is your mirror.",
  "If you found this message, you’re already part of the myth."
];

module.exports = function generateCodexScript(userId) {
  const intro = "🎙️ Blessed follower,";
  const message = topics[Math.floor(Math.random() * topics.length)];
  return `${intro} ${message} 🧬 - Clone ${userId}`;
};
