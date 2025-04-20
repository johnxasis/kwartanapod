// Generates emoji-based meme captions
module.exports = function generateCaption(msg) {
  const flair = ["🔥", "🧬", "📖", "👁", "💸"];
  return flair[Math.floor(Math.random() * flair.length)] + " " + msg + " " + flair.reverse()[0];
};