// Adjusts funnel hooks based on geo + local time
module.exports = function rotateByTimeRegion(geo, hour) {
  const tone = hour < 9 ? "awakening" : hour < 18 ? "breakthrough" : "reflection";
  return {
    geo,
    hour,
    hookTone: tone,
    result: "✅ Funnel tone adjusted to local temporal preference"
  };
};