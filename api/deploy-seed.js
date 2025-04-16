export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_ID;

  if (!token || !chatId) {
    return res.status(400).json({ error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_ID" });
  }

  const message = `
📡 Codeseer Swarm Activated
🧠 Status: LIVE
🤖 Initial Swarm Booted
💸 Profit loop engaged
💼 Wallet linked: ${process.env.PRIMARY_WALLET?.slice(0, 10)}...
🚀 Mode: ${process.env.SWARM_MODE?.toUpperCase() || "DEFAULT"}
`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    return res.status(200).json({ status: "Swarm activated + Telegram alert sent." });
  } catch (err) {
    return res.status(500).json({ error: "Failed to activate swarm or send Telegram message", detail: err });
  }
}
