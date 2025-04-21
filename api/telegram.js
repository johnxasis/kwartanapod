
import { createClient } from '@upstash/redis';
import fetch from 'node-fetch';

const redis = createClient({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    const { message } = req.body;
    if (!message || !message.text) return res.status(400).json({ error: 'Invalid Telegram payload' });

    const text = message.text.trim().toLowerCase();
    const chatId = message.chat.id;

    if (text.includes('/start')) {
      await reply(chatId, `🔥 Welcome to Gospel Warrior Bot.\nType any message and I’ll bless you.`);
      return res.status(200).end();
    }

    const blessing = await generateBlessing(text);
    await redis.set(`chat:${chatId}:last`, blessing);

    await reply(chatId, `This post really blessed me 🙏 - Gospel Warrior\n\n${blessing}`);
    return res.status(200).end();

  } catch (error) {
    console.error('Telegram Bot Error:', error);
    return res.status(500).json({ error: 'Bot failed' });
  }
}

async function reply(chatId, text) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
}

async function generateBlessing(prompt) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Bless the user with this message: "${prompt}"` }],
        temperature: 0.8,
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "You are blessed and loved. Go forward.";
  } catch (e) {
    console.error("OpenAI error:", e);
    return "May the Lord bless you with wisdom and strength today.";
  }
}
