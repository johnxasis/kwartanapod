const fetch = require('node-fetch');
require('dotenv').config();

const SMS_API_KEY = process.env.SMS_5SIM_KEY;

async function buyVerifiedNumber() {
  const balanceCheck = await fetch(`https://5sim.net/v1/user/profile`, {
    headers: { 'Authorization': `Bearer ${SMS_API_KEY}` }
  });
  const balance = await balanceCheck.json();

  if (balance.balance < 0.5) {
    console.log("⚠️ Not enough credit to buy a verified number.");
    return;
  }

  const order = await fetch(`https://5sim.net/v1/user/buy/activation/any/telegram`, {
    headers: { 'Authorization': `Bearer ${SMS_API_KEY}` }
  });
  const result = await order.json();
  console.log("📱 Number purchased:", result.phone);
}

buyVerifiedNumber();
