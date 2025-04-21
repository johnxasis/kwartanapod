function processEarnings(userId, res) {
    // Simulate redis-logged affiliate earning logic
    res.send({ text: `💸 Earnings ready for ${userId}. Visit your links.` });
}
module.exports = { processEarnings };