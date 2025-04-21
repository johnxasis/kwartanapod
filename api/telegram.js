module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = req.body;
    console.log("Incoming Telegram Update:", JSON.stringify(body, null, 2));

    const message = body?.message?.text;
    const chatId = body?.message?.chat?.id;

    if (!chatId || !message) {
      console.error("Missing chatId or message.");
      return res.status(400).json({ error: "Invalid Telegram data" });
    }

    const resp = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `🧠 SwarmBot received: "${message}"`
      })
    });

    const data = await resp.json();
    console.log("Telegram sendMessage response:", data);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Handler crashed:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
