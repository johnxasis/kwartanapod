// Generates a viral PDF with affiliate payload
module.exports = function generateFunnelPDF(title, productLink) {
  return {
    title: title || "How I Made $30k With ChatGPT",
    content: [
      "Page 1: Intro & Credibility",
      "Page 2: What is Clone AI?",
      "Page 3: Setup Guide",
      `Page 4: Funnel — ${productLink}`,
      "Page 5: Vault Link & Telegram Invite",
      "Page 6: Meme Examples",
      "Page 7: Bonus Token Airdrop"
    ]
  };
};