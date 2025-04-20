// Obfuscates Telegram bot commands
module.exports = function cloakCommand(input) {
  const valid = ["earn", "status", "wallet", "invite"];
  return valid.includes(input) ? `Command ${input} accepted` : `⚠️ Unknown action`;
};