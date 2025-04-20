// Assigns unique visual/logic data to clone brands
const brands = require('./cloneBrands.json');
module.exports = function generate(index) {
  return {
    name: brands[index % brands.length],
    style: ["🔥", "🧬", "👁", "📖", "💀", "📈"][index % 6],
    logic: ["dark", "profit", "viral", "stealth", "meme", "cult"][index % 6]
  };
};