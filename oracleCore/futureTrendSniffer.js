// Predicts rising GPT needs from forums, social, discord
module.exports = function predictNext() {
  const predictions = ["GPT Dungeon Game", "NSFW Companion GPT", "AI Course Writer", "Crypto Wallet Guard"];
  return predictions[Math.floor(Math.random() * predictions.length)];
};