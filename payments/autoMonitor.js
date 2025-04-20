// Auto-checks NOWPayments webhook logs for status
const axios = require('axios');

module.exports = async function monitorPayments(apiKey) {
  try {
    const { data } = await axios.get(
      "https://api.nowpayments.io/v1/payment",
      { headers: { "x-api-key": apiKey } }
    );
    return data.filter(p => p.payment_status === "finished").map(p => ({
      user: p.order_id,
      amount: p.price_amount,
      currency: p.pay_currency,
      unlock: "✅ Vault Unlocked"
    }));
  } catch (e) {
    return [`❌ Monitor failed: ${e.message}`];
  }
};