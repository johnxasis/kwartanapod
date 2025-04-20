// NFT-based vault previews with referral-embedded logic
module.exports = function generateNFTPreview(userId) {
  return {
    previewImage: `https://vault.gospelwarrior.ai/nfts/preview-${userId}.png`,
    referralLink: `https://vault.gospelwarrior.ai/unlock?ref=${userId}`
  };
};