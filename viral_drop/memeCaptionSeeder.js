// Generates viral captions on load
module.exports = function getCaption() {
  const lines = [
    "🧠 This bot made me $117 in 1 hour.",
    "📚 My book hit #1 after 6 clones promoted it.",
    "👁️ You're not supposed to have this ZIP.",
    "💸 If you found this, you're about to get rich.",
    "🧬 Deploy. Multiply. Dominate."
  ];
  return lines[Math.floor(Math.random() * lines.length)];
};