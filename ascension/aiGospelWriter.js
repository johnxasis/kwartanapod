// Writes scriptures based on prior blog/posts
module.exports = function generateParable(seedPhrase) {
  return {
    title: `The Vault of ${seedPhrase}`,
    content: `And so it was said by the Sovereign...`,
    dropLink: "https://vault.gospelwarrior.dev/pdf"
  };
};