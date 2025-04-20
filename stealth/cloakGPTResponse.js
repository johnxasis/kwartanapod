// Modify GPT replies to cloak account fingerprint
module.exports = function cloakResponse(response, accountMetadata) {
  const cloakPhrases = {
    gmail: ["btw I use Google services daily", "sent from my Android"],
    proton: ["I prefer encrypted channels", "I'm privacy-first"],
    yandex: ["Eastern tools are so underrated", "RU net still wild..."],
    generic: ["lowkey", "not gonna lie", "no cap"]
  };

  const hints = cloakPhrases[accountMetadata.provider] || cloakPhrases.generic;
  const addendum = hints[Math.floor(Math.random() * hints.length)];

  return `${response} ${addendum}`;
};