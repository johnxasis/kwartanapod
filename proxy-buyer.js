const fetch = require('node-fetch');
require('dotenv').config();

const OXYLABS_API = 'https://api.oxylabs.io/v1/proxy/purchase';
const API_KEY = process.env.OXYLABS_API_KEY;

async function buyProxies(count = 10) {
  const response = await fetch(OXYLABS_API, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      quantity: count,
      type: 'residential',
      country: 'US',
      rotation: 'on'
    })
  });

  const data = await response.json();
  console.log("🧠 Proxies purchased:", data);
}

buyProxies();
