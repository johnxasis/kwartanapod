// Unlocks vault content via crypto confirmation
const { apiKey, apiURL } = require('./nowConfig');
const axios = require('axios');

module.exports = async function unlockVault(userId, amount = 5.99, currency = "USDT") {
  const payload = {
    price_amount: amount,
    price_currency: "usd",
    pay_currency: currency,
    order_id: userId,
    order_description: "Vault Access via Crypto",
    ipn_callback_url: "https://yourdomain.com/api/nowpayments/webhook"
  };

  const headers = { "x-api-key": apiKey };

  try {
    const { data } = await axios.post(apiURL, payload, { headers });
    return `🪙 Vault payment initiated. Pay here: ${data.invoice_url}`;
  } catch (err) {
    return `❌ Vault unlock failed: ${err.message}`;
  }
};