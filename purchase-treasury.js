const fetch = require('node-fetch');
require('dotenv').config();

async function allocateFunds() {
  const res = await fetch('https://api.nowpayments.io/v1/balance', {
    headers: { 'x-api-key': process.env.NOWPAYMENTS_API_KEY }
  });
  const data = await res.json();
  const funds = parseFloat(data.balance_amount);

  const proxyFunds = funds * 0.2;
  const smsFunds = funds * 0.15;
  const reserve = funds * 0.65;

  console.log("💳 Budget Allocated:");
  console.log("- Proxy:", proxyFunds.toFixed(2));
  console.log("- SMS Verification:", smsFunds.toFixed(2));
  console.log("- Treasury Reserve:", reserve.toFixed(2));
}

allocateFunds();
