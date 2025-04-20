// Generates clone referral URLs with upstream profit cut
module.exports = function buildLink(cloneID) {
  return `https://yourswarm.ai/clone?ref=${cloneID}&split=15`;
};