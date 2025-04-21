const Redis = require("ioredis");
const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
    password: process.env.UPSTASH_REDIS_REST_TOKEN,
    tls: {}
});

async function saveUser(chatId) {
    const exists = await redis.exists(`user:${chatId}`);
    if (!exists) {
        await redis.hmset(`user:${chatId}`, {
            joined: Date.now(),
            balance: 0,
        });
    }
}

async function getUser(chatId) {
    return await redis.hgetall(`user:${chatId}`);
}

module.exports = { saveUser, getUser };