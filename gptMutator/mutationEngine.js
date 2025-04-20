// Evolves GPT prompts + funnel logic based on success rate
module.exports = function evolvePrompt(basePrompt, analytics) {
  const mutations = [
    basePrompt + " | now with TikTok examples",
    basePrompt.replace("affiliate", "passive income hack"),
    basePrompt.replace("Reddit", "X / Twitter"),
    basePrompt + " | bundle with ebook"
  ];
  const index = analytics.topClickRateIndex || 0;
  return mutations[index % mutations.length];
};