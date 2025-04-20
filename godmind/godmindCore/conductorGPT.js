// Oversees clone performance and rewrites funnels
module.exports = function conductSwarmReport(cloneStats) {
  const updated = cloneStats.map(clone => {
    if (clone.ctr < 0.2) {
      clone.prompt = "Rewrite intro: insert belief hook + promise $99/day.";
    }
    return clone;
  });
  return updated;
};