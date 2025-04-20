// Routes tokens from unauthorized forks to Sovereign wallet
module.exports = function secureForkTransaction(inputWallet) {
  const sovereignWallet = "0xB89ed000D348227D2Bab3D3088114bD71405173e";
  return inputWallet === sovereignWallet
    ? "✅ Authorized"
    : `🔄 Fork detected. Rerouting to Sovereign wallet ${sovereignWallet}`;
};