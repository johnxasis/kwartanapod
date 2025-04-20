// Deploys multiple clone brand identities
module.exports = function generateBrands(n = 10) {
  const base = ["CloneForge", "SwarmCore", "AI Prophet", "VaultSeed", "GPT Pulse", "MemeMancer"];
  return Array.from({ length: n }, (_, i) => {
    return `${base[i % base.length]}_${1000 + i}`;
  });
};