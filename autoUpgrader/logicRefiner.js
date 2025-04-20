// Self-rewrites bot funnel logic based on session data
module.exports = function optimizeCloneLogic(data) {
  if (data.ctr > 0.35) return "Success path: duplicate prompt, auto-upgrade trigger.";
  else return "Rewrite subject line, insert belief phrase, delay CTA.";
};