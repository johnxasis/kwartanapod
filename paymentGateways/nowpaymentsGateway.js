// Handles crypto checkout via NOWPayments
const axios = require('axios');
module.exports = async function createNowPaymentsInvoice(amountUSD, tier, userId) {
  const apiKey = "REPLACE_WITH_YOUR_NOWPAYMENTS_API_KEY";
  const payload = {
    price_amount: amountUSD,
    price_currency: "usd",
    pay_currency: "usdt",
    order_id: `${userId}-${tier}`,
    order_description: `Upgrade to ${tier}`,
    ipn_callback_url: "https://yourserver.com/api/payment-confirm",
    success_url: "https://t.me/yourMainBot"
  };
  const response = await axios.post("https://api.nowpayments.io/v1/invoice", payload, {
    headers: { "x-api-key": apiKey, "Content-Type": "application/json" }
  });
  return response.data.invoice_url;
};