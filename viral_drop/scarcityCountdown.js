// Creates fake scarcity countdown
module.exports = function getScarcity() {
  const remaining = Math.floor(Math.random() * 25) + 5;
  return `⚠️ Only ${remaining} clone activations left today. Claim now.`;
};