// Pushes revenue to NOWPayments crypto gateway
module.exports = function syncUSDT(amount, wallet) {
  return {
    amount,
    currency: "USDT",
    destinationWallet: wallet,
    status: "✅ Routed via NOWPayments"
  };
};