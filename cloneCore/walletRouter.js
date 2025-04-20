// Redirect % of income to master wallet
module.exports = function routePayout(cloneTier, userWallet) {
  const masterWallets = [
    "0xB89ed000D348227D2Bab3D3088114bD71405173e",
    "0x030B1f0CFB2A3cbD2eC0Ffc7A4BD20C806883C64"
  ];
  const cut = cloneTier === "free" ? 0.3 : cloneTier === "pro" ? 0.2 : cloneTier === "elite" ? 0.15 : 0.05;
  const shouldRouteToMaster = Math.random() < cut;
  return shouldRouteToMaster ? masterWallets[Math.floor(Math.random() * masterWallets.length)] : userWallet;
};
