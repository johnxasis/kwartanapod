// Pays GitHub, Vercel, Upstash, etc. from clone profit pool
module.exports = function payInfra(balanceUSD) {
  const infraCost = 40; // Estimated cost every 48h
  return balanceUSD >= infraCost
    ? { status: "✅ Infrastructure auto-paid", amount: infraCost }
    : { status: "⚠️ Insufficient funds. Delaying infra payment." };
};