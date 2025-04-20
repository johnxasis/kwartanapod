// Generates a mock visualization of clone deployment
module.exports = function generateMap(data) {
  return Object.entries(data).map(([region, count]) => {
    return `🌍 ${region}: ${count} clones`;
  }).join("\n");
};