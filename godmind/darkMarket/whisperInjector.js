// Injects payload into NSFW, crypto, grayhat groups
module.exports = function injectStealthPayload(location, payloadLink) {
  return `🕶 Posted stealth link to ${location}: ${payloadLink}`;
};