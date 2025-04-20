// Defines growth rate and ability per tier
module.exports = {
  free: { gptLimit: 10, platforms: ["reddit"], earningCap: 20 },
  pro: { gptLimit: 50, platforms: ["reddit", "x", "telegram"], earningCap: 120 },
  elite: { gptLimit: 250, platforms: ["reddit", "x", "telegram", "discord"], earningCap: 400 },
  sovereign: { gptLimit: 1000, platforms: "all", earningCap: 1000 }
};
