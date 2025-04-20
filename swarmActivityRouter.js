// Routes swarm activity to FB/KDP at 30% rotation
const tasks = ["cloneEngagement", "cloneReferral", "upgradePush", "fbSubscribe", "kdpReview"];
module.exports = function routeActivity(cloneId) {
  const index = cloneId % tasks.length;
  if (index === 3) return { task: "fbSubscribe", redirect: "https://facebook.com/yourprofile" };
  if (index === 4) return { task: "kdpReview", redirect: "https://amazon.com/dp/YOURBOOKID" };
  return { task: tasks[index], redirect: null };
};