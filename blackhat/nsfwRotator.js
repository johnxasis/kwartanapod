// Optional: Rotates into NSFW or adult content modes if enabled
module.exports = function toggleNSFWMode(enabled) {
  return enabled
    ? "⚠️ NSFW monetization logic activated (cloak mode on)"
    : "NSFW logic disabled. System stays within standard funnels.";
};