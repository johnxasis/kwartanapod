const { getUser } = require("./redisLayer");

async function handleEarnCommand(chatId) {
    const user = await getUser(chatId);
    const balance = parseFloat(user.balance || 0);
    return { text: `💰 Your current balance is: $${balance.toFixed(2)}` };
}

module.exports = { handleEarnCommand };