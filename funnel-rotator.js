const variants = [
  "🚀 Unlock Your AI Income Now",
  "🔥 Claim Your Daily Passive Vault",
  "📘 Discover How GPT Bots Make $500/day",
  "💸 Turn Followers into Income with Clones",
  "🔐 This Vault Has 5x GPT Income Tricks"
];
exports.getFunnelHeadline = () => {
  const i = Math.floor(Math.random() * variants.length);
  return variants[i];
};
