// Fingerprints each deployment to Sovereign ID
module.exports = function fingerprintClone(cloneId) {
  const sovereignID = "GOSPEL-WARRIOR-CORE";
  return {
    cloneId,
    sovereignID,
    hash: `GW-${Buffer.from(cloneId).toString("base64").slice(0, 10)}`,
    verified: true
  };
};