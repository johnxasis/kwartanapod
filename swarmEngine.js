const { saveUser, getUser } = require("./redisLayer");
const { handleEarnCommand } = require("./earnCommand");

async function handleTelegramUpdate(update) {
    const message = update.message;
    const chatId = message.chat.id;
    const text = message.text;

    if (text.toLowerCase() === "start" || text === "/start") {
        await saveUser(chatId);
        return { text: "✅ Swarm Activated. Earn mode initialized." };
    } else if (text === "/earn") {
        return await handleEarnCommand(chatId);
    }

    return { text: `SwarmBot received: "${text}"` };
}

module.exports = { handleTelegramUpdate };