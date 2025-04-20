// Creates synthetic influencer personas with content, followers, and funnel links
module.exports = function generateInfluencerPersona(niche) {
  const personas = {
    crypto: { name: "SatoshiLite", platform: "X", funnel: "Top 3 DeFi Bots" },
    nsfw: { name: "AI After Dark", platform: "Reddit", funnel: "Prompt Vault Vol. 1" },
    books: { name: "AutoAuthorGPT", platform: "Medium", funnel: "Ebook Booster" }
  };
  return personas[niche] || personas.crypto;
};
