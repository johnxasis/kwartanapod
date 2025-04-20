// Generates leaderboard for gamified launch
let board = [
  { user: "initiate_004", earned: 238 },
  { user: "clonegenius", earned: 192 },
  { user: "dreamnode", earned: 121 }
];

module.exports = function getBoard() {
  return board.map((b, i) =>
    `${i + 1}. ${b.user} — $${b.earned}`).join("\n");
};