// Simulated front-end view for public users
module.exports = function userView(userId) {
  return {
    userId,
    walletStatus: "✅ Synced",
    clonesAssigned: Math.floor(Math.random() * 5) + 1,
    cap: "$20/day until upgrade",
    logs: ["Clone #23 engaging with funnel", "✅ Vault earnings pending", "📈 Meme campaign active"]
  };
};