// Handles /promote command in Telegram to input FB/book links
module.exports = function promote(input) {
  const [_, type, link] = input.split(" ");
  return `🚀 Swarm received: Promote ${type} at ${link}`;
};