// Deploys bots in specific countries + languages
module.exports = function spawnByRegion(region) {
  const configs = {
    ES: { language: "Spanish", vertical: "TikTok GPT + Crypto" },
    IN: { language: "Hindi", vertical: "Freelance PDFs + Telegram" },
    CN: { language: "Chinese", vertical: "Ecom + GPT Proxies" },
    RU: { language: "Russian", vertical: "Crypto Funnel Threads" },
    BR: { language: "Portuguese", vertical: "NSFW Ebook Funnel" }
  };
  return configs[region] || configs.ES;
};
