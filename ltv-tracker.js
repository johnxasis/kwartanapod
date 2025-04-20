const Redis = require('ioredis');
require('dotenv').config();
const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
  password: process.env.UPSTASH_REDIS_REST_TOKEN,
});

async function trackLTV(userId, amount) {
  const key = `user:${userId}:ltv`;
  const current = parseFloat(await redis.get(key) || '0');
  await redis.set(key, (current + amount).toFixed(2));
}

async function getTopEarners(limit = 10) {
  const keys = await redis.keys('user:*:ltv');
  const all = await Promise.all(keys.map(async key => {
    const val = await redis.get(key);
    return { user: key.split(':')[1], ltv: parseFloat(val) };
  }));
  return all.sort((a, b) => b.ltv - a.ltv).slice(0, limit);
}

module.exports = { trackLTV, getTopEarners };
