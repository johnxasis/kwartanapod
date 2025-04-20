// Builds user profile for adaptive GPT tone
const profiles = {};
module.exports = {
  update(userId, data) {
    profiles[userId] = { ...(profiles[userId] || {}), ...data };
  },
  get(userId) {
    return profiles[userId] || {};
  }
};