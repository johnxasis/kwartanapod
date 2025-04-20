// Posts synced signals across Reddit, X, YouTube comments
module.exports = function dispatchSignal(message) {
  return {
    reddit: `[Reddit] ${message}`,
    twitter: `[X] ${message}`,
    youtube: `[YT Comment] ${message}`
  };
};