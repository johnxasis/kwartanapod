// Simulates Telegram bot registration (mockup)
module.exports = async function createTelegramBot(name, token) {
  return {
    botName: name,
    token: `auto-${token.slice(0, 5)}-${Date.now()}`,
    webhook: `https://vercel.yourdomain.app/api/telegram/${name}`
  };
};