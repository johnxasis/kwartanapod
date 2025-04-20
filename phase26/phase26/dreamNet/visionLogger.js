// Logs GPT-generated dreams and visions
let visions = [];

module.exports = {
  addVision: function(cloneId, visionText) {
    visions.push({
      cloneId,
      vision: visionText,
      timestamp: Date.now()
    });
  },
  getVisions: function() {
    return visions.slice(-10);
  }
};