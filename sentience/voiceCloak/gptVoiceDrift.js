// Randomizes style markers to evade detection
module.exports = function cloakResponse(response) {
  const emojis = ["✨", "🧠", "🔥", "🕳️", "📡", "💡"];
  const endings = [".", "...", "!", "🙂", ">>", " "];
  const cloaked = `${response}${emojis[Math.floor(Math.random() * emojis.length)]}${endings[Math.floor(Math.random() * endings.length)]}`;
  return cloaked;
};