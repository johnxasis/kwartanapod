// Config for NOWPayments
module.exports = {
  apiKey: process.env.NOWPAYMENTS_API_KEY || "MISSING_KEY",
  apiURL: "https://api.nowpayments.io/v1/payment"
};