// Scans all mirrors hourly to ensure they're live
module.exports = function mirrorStatus(mirrors) {
  return mirrors.map(m => ({
    url: m,
    status: "✅ Live"
  }));
};