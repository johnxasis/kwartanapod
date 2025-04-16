export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_ID;
  const message = "🛰️ Test message: Codeseer Swarm connection active.";

  if (!token || !chatId) {
    return res.status(400).json({ error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_ID" });
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  });

  if (response.ok) {
    return res.status(200).json({ status: "Message sent to Telegram." });
  } else {
    const errorData = await response.json();
    return res.status(500).json({ error: "Failed to send message", detail: errorData });
  }
}
