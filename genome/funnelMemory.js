// Clones learn from past performance by persona
module.exports = function memoryRoute(profileType) {
  const decisions = {
    believer: "vault/prophecy",
    skeptic: "meme/drop",
    donor: "gumroad/book-sale",
    impulse: "nsfw/burner-funnel"
  };
  return decisions[profileType] || "vault/start";
};