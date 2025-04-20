const keywords = ['AI tool', 'GPT', 'automated income', 'passive bot'];
const baitLink = "https://bit.ly/vault-clone-ai";

function scanDiscordMessages(messages) {
  messages.forEach(msg => {
    if (keywords.some(k => msg.includes(k))) {
      console.log("💣 Trigger bait: " + baitLink + " → on: " + msg);
    }
  });
}

const testMsgs = [
  "any passive GPT tools here?",
  "looking to monetize AI traffic",
  "best AI side hustle?"
];

scanDiscordMessages(testMsgs);
