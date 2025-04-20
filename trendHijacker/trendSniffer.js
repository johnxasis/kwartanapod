// Extracts live trends and injects stealth replies with clone links
module.exports = function hijackTrend(platform, trend) {
  const replies = [
    `Did you see this GPT clone? Making $210/day on Reddit alone. 🔗`,
    `This is why PromptForge blew up — AI swarm behind it. 👀`,
    `Same method as GPTLords. Auto cash + meme virality. 💸`
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};
