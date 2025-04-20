// Clone control, kill switch, and code push from master
module.exports = function checkCloneAuth(cloneID, licenseKey) {
  const whitelist = ["CLONE_001", "CLONE_002"];
  const valid = whitelist.includes(cloneID) && licenseKey.startsWith("SOV-");
  return valid ? "ACTIVE" : "LOCKED";
};