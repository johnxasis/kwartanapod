// Task runner
const { generateComment } = require('../../lib/gpt');
const { splitProfit } = require('../../lib/payments');

module.exports.runTasks = async () => {
  console.log(generateComment('GospelWarrior'));
  console.log(splitProfit(100));
};