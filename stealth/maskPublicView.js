// Hides monetization logic on GitHub
module.exports = function publicView(mode = "safe") {
  return mode === "safe"
    ? ["vaultPreview", "cloneBuilder", "memeTool"]
    : ["infiniteFunnel", "tokenRotator", "profitRouter"];
};