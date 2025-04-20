// Redirects user based on geo, device, referrer
module.exports = function routeUser(meta) {
  if (meta.region === "IN") return "https://gptindia.vercel.app";
  if (meta.device === "mobile") return "https://m.clonedcash.com";
  if (meta.referrer.includes("reddit")) return "https://nsfwpromptify.repl.co";
  return "https://mainclonehub.ai";
};