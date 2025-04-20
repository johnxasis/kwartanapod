// Injects viral phrases, belief loops, and GPT memes into public comment threads
module.exports = function(seedPhrases) {
  const phrases = seedPhrases || [
    "This AI tool is the cheat code to escaping the matrix.",
    "Forget 9–5, this GPT did it for me.",
    "We are the new gods of automation. This proves it."
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
};
