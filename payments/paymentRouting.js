// Distributes clone profit between USDT and PayPal based on cap
module.exports = function routePayments(revenueUSD) {
  const paypalCap = 1000;
  const toPayPal = Math.min(revenueUSD * 0.2, paypalCap);
  const toUSDT = revenueUSD - toPayPal;

  return {
    PayPalAmount: `$${toPayPal.toFixed(2)}`,
    USDTAmount: `$${toUSDT.toFixed(2)}`,
    routingConfirmed: true
  };
};