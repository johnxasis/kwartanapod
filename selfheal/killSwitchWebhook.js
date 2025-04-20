// Webhook-activated redeploy + notification
module.exports = function activateKillSwitch(trigger) {
  if (trigger === "GITHUB_REPO_BANNED") {
    return "🛡️ Repo flagged. Redeploying to mirror account...";
  }
  return "✅ System stable.";
};