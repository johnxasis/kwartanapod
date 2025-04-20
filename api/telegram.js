
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const BOT_TOKEN = process.env.TELEGRAM_TOKEN;
  const { message } = req.body;

  if (!message || !message.chat || !message.text) return res.status(200).end();

  const chatId = message.chat.id;
  const userText = message.text.toLowerCase();

  let reply = "🧠 Command received. Swarm core standing by.";

  if (userText.includes("/start")) {
    reply = "🛡️ Telegram Console Activated. Swarm status: Awaiting directives.";
  } else if (userText.includes("status")) {
    reply = "✅ Swarm deployed. Revenue logic live. Awaiting funnel unlocks.";
  } else if (userText.includes("wallet")) {
    reply = "🔗 Wallet routing: NOWPayments & PayPal relay enabled.";
  }

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: reply })
  });

  return res.status(200).end();
}
