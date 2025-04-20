// Routes Gospel content through belief-optimized funnels
module.exports = function routeFunnel(userType = "believer") {
  const paths = {
    believer: "https://vault.oasis/fb/gospel",
    seeker: "https://vault.oasis/fb/start",
    donor: "https://vault.oasis/fb/oasis-donate",
    subscriber: "https://facebook.com/iamGospelWarrior/subscribe"
  };
  return paths[userType] || paths.believer;
};