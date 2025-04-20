// Rotates weekly book promotion angle based on GPT logic
module.exports = function mutateBookPromo(week) {
  const angles = [
    "📘 Discover how Chapter 3 unlocked $200/day with GPT.",
    "🔥 This AI book is banned in 3 groups. Here's why...",
    "🧠 Prompt like a god — learn the codex in Chapter 5.",
    "📚 BookClub Pick of the Week — 10,000+ clones reading.",
    "💸 7 hacks in this PDF made me $4,120 last month."
  ];
  return angles[week % angles.length];
};