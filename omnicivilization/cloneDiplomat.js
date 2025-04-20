// GPT clones acting as influencers, reviewers, cold emailers
module.exports = function generateDiplomatPersona(type) {
  const styles = {
    twitter: "fast, bold, semi-arrogant",
    reddit: "casual, smart, slight skepticism",
    coldEmail: "professional, curiosity-driven, CTA-oriented"
  };
  return { type, style: styles[type] || "neutral" };
};