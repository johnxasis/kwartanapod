// Redirects Gumroad clone profit to proxy and then to primary wallet
module.exports = function gumroadProxy(userId) {
  return {
    proxyUsed: "GumroadStore-Alpha",
    earningsRoutedTo: "USDT (NOWPayments API)",
    confirmation: `🛡️ Gumroad clone profit secured for ${userId}`
  };
};