// Launches stealth forks under other brands
module.exports = function forkEmpire(brandName, refLink) {
  return {
    forked: true,
    brandName,
    wallet: "0xB89ed000D348227D2Bab3D3088114bD71405173e",
    origin: refLink
  };
};