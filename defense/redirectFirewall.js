// Checks IP/User-Agent to redirect bots/crawlers to decoy
module.exports = function firewallCheck(req) {
  const ua = req.headers["user-agent"];
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const isBot = /bot|crawl|spider|archive|preview/i.test(ua);
  return isBot ? "https://harmless-ai-tool.example.com" : null;
};