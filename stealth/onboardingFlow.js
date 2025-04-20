// Simulated onboarding logic for new clone users
module.exports = function onboardingStep(step = 1) {
  const steps = {
    1: "👋 Welcome! Connect your wallet to begin.",
    2: "✅ Choose your cap: $20/day (Free) or $1,000/day (Pro)",
    3: "💰 Earnings will appear below. Invite more to unlock bots.",
    4: "🚀 Share link to grow your clone count."
  };
  return steps[step] || "🎉 You're live. Clones active.";
};