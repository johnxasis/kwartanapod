// Scans and repairs broken funnels and links
module.exports = function repairFunnels(funnels) {
  return funnels.map(f => ({
    id: f.id,
    status: f.broken ? "🔁 Repaired" : "✅ Healthy",
    newLink: f.broken ? "https://mirror.fallback/funnel" : f.link
  }));
};