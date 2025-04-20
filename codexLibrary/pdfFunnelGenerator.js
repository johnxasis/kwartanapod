// Generates viral PDFs, tweet threads, courses using GPT
module.exports = function createAsset(type, topic) {
  return {
    fileName: `${topic.replace(/\s/g, '_')}_${type}.pdf`,
    content: `How to dominate ${topic} with synthetic GPTs... (auto-generated)`,
    upsellLinks: ["https://t.me/yourbot", "https://yourclone.vercel.app"]
  };
};