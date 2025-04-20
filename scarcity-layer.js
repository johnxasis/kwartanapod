module.exports = function scarcityCountdown() {
  const spots = Math.floor(Math.random() * 20 + 5);
  const hoursLeft = Math.floor(Math.random() * 3 + 1);
  return `🔥 Only ${spots} spots left today. Offer expires in ${hoursLeft}h.`;
};
