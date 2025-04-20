// Redirects some clone actions toward Facebook/KDP actions
module.exports = function rerouteSwarmTask(type, link) {
  if (type === 'fb') return `🧠 Redirecting clone to subscribe to: ${link}`;
  if (type === 'book') return `📚 Clone assigned to purchase + review: ${link}`;
  return `🌀 Task type ${type} not recognized`;
};