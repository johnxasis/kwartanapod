module.exports = (req, res) => {
  const link = "https://nowpayments.io/payment-link/YOUR_CRYPTO_GATE";
  res.status(200).json({
    headline: "🚀 Upgrade Your Vault to Pro Tier (Crypto Only)",
    instructions: "Send any amount in ETH/USDT to unlock private GPT vaults",
    payLink: link
  });
};
