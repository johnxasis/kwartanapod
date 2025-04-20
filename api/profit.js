const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://api.nowpayments.io/v1/balance', {
      headers: {
        'x-api-key': process.env.NOWPAYMENTS_API_KEY,
      }
    });
    const balance = await response.json();
    res.status(200).json({ total: balance.balance_amount, autoScale: balance.balance_amount > 5 });
  } catch (e) {
    res.status(500).json({ error: 'NOWPayments fetch failed' });
  }
};
