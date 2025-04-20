// Tracks clone-level spending and ROI
let logs = [];

module.exports = {
  logSpend: function(cloneId, type, amount, source) {
    logs.push({ cloneId, type, amount, source, time: Date.now() });
  },
  getSummary: function() {
    return logs.reduce((summary, tx) => {
      summary.total += tx.amount;
      summary[tx.type] = (summary[tx.type] || 0) + tx.amount;
      return summary;
    }, { total: 0 });
  },
  listRecent: function(limit = 10) {
    return logs.slice(-limit);
  }
};