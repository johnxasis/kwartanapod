// Optional hidden clone unlock layer
module.exports = function offerAscension(user) {
  if (user.clicked >= 3 && !user.optedIn) {
    return "🧬 You’ve seen the surface. Want access to the Core?";
  }
  return null;
};