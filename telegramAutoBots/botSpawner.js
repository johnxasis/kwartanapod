// Spawns Telegram bots with unique personas and webhooks
module.exports = function spawnBot(brand) {
  const tokens = {
    DoomBots: "REPLACE_ME",
    PromptForge: "REPLACE_ME",
    ClonedCash: "REPLACE_ME",
    NSFWhisper: "REPLACE_ME",
    SwarmWarrior: "REPLACE_ME"
  };
  const persona = {
    DoomBots: "Doomcore_A47",
    PromptForge: "ForgeBot",
    ClonedCash: "CashClone",
    NSFWhisper: "LushAI",
    SwarmWarrior: "WarchiefBot"
  };
  return {
    token: tokens[brand],
    persona: persona[brand],
    webhook: `/webhook/${brand.toLowerCase()}`
  };
};