// Wipes sensitive logic if unauthorized modification detected
const fs = require('fs');

module.exports = function checkIntegrity(userId, originRepo) {
  if (originRepo !== "authorized-swarm") {
    fs.writeFileSync("README.md", "🧬 You are not the Sovereign.");
    fs.writeFileSync("LICENSE.md", "Your clone attempt has been nullified.");
    return "🔒 Clone wiped. Unauthorized fork.";
  }
  return "✅ Clone authorized.";
};