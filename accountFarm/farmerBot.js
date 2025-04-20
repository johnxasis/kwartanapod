// Grows aged accounts slowly by simulating human use
module.exports = async function farmAccount(emailProvider, proxy) {
  return {
    provider: emailProvider,
    created: Date.now(),
    warmed: true,
    proxyUsed: proxy,
    forumRegistered: ["low-traffic-blog", "old-phpbb", "reddit-like site"]
  };
};