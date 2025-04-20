const fs = require('fs');
const vault = require('./vault-data');

function shuffleVaultOffers() {
  const shuffled = vault.offers.sort(() => Math.random() - 0.5);
  const rotated = shuffled.slice(0, 3);
  fs.writeFileSync('./vault-data.js', `module.exports = { offers: ${JSON.stringify(rotated, null, 2)} }`);
  console.log("🔄 Vault offers rotated and saved.");
}

shuffleVaultOffers();
