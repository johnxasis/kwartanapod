// Hooks into external aged account marketplaces
const axios = require("axios");
module.exports = async function buyAccount(provider, token, qty) {
  const res = await axios.post("https://api.buyaccs.io/purchase", {
    provider,
    token,
    quantity: qty
  });
  return res.data;
};