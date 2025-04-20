// Spawns variations of top-performing assets
module.exports = function expandAsset(assetType, baseContent) {
  return Array.from({ length: 5 }, (_, i) => ({
    variant: `${assetType}-${i + 1}`,
    derivedFrom: baseContent,
    purpose: "💰 Profit mutation"
  }));
};