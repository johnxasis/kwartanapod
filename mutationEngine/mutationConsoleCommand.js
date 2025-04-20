// Telegram command: /promote <type> <link>
module.exports = function handlePromoteCommand(type, link) {
  if (type === 'fb') return `✅ FB promotion activated: ${link}`;
  if (type === 'book') return `📕 Book campaign activated: ${link}`;
  if (type === 'pdf') return `📄 PDF share set: ${link}`;
  return `❓ Unknown type: ${type}`;
};