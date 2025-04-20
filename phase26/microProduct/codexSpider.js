// Auto-creates micro products based on trends
module.exports = function generateMicroProduct(trend) {
  return {
    title: `Codex Drop: ${trend}`,
    format: "PDF",
    priceUSD: (Math.random() * 15 + 5).toFixed(2),
    delivery: "Gumroad-ready"
  };
};