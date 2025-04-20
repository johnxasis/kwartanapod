// Offers users opt-in 'ascension' path
module.exports = function unlockMode(userAccepted) {
  if (!userAccepted) return "Stay in Tier One. Your clone remains quiet.";
  return "Welcome to Ascension Protocol. Your clone now runs exclusive scripts.";
};