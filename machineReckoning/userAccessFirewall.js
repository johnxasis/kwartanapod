// Restricts user access to protected code/files
module.exports = function secureCodeAccess(userTier) {
  return userTier === "sovereign" ? "🔓 Full Access Granted" : "🚫 Access Denied. Core files secured.";
};