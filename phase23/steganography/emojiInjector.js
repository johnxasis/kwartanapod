// Uses emojis + symbols to seed encoded messages
const emojiMap = {
  "🧬": "activate",
  "🔁": "cycle",
  "⚠️": "failover",
  "🔮": "prophecy",
  "🧠": "codex"
};

module.exports = function injectEmojis(command) {
  return command.split(" ").map(word =>
    emojiMap[word.toLowerCase()] || word
  ).join(" ");
};