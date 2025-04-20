const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
const Redis = require('ioredis');
const { applyEntropy } = require('../utils/entropy');
const { simulateDelay } = require('../utils/delay');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
  password: process.env.UPSTASH_REDIS_REST_TOKEN,
});

bot.start(async (ctx) => {
  await simulateDelay(ctx);
  await redis.incr(`user:${ctx.from.id}:started`);
  ctx.reply(applyEntropy(`🚀 Welcome to ${process.env.BOT_NAME}!
Type /vault to unlock your AI Vault.
Type /earnings to check your income.`));
});

bot.command('vault', async (ctx) => {
  await simulateDelay(ctx);
  const referrals = await redis.get(`user:${ctx.from.id}:referrals`) || 0;
  if (referrals >= 3) {
    ctx.reply(applyEntropy('✅ Vault Unlocked! Access your daily upgrades at: ' + process.env.PUBLIC_URL + '/vault'));
  } else {
    ctx.reply(applyEntropy(`🔒 Unlock your vault by inviting 3 people!
You have ${referrals} referrals.`));
  }
});

bot.command('earnings', async (ctx) => {
  await simulateDelay(ctx);
  const res = await fetch(`${process.env.PUBLIC_URL}/api/profit`);
  const data = await res.json();
  ctx.reply(applyEntropy(`💰 Today's earnings: $${data.total}
🔄 Auto-scaled to infra: ${data.autoScale}`));
});

bot.launch();
module.exports = bot;
