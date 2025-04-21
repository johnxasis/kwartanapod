export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;

    if (!body || !body.message || !body.message.text) {
      return res.status(200).send('No actionable message.');
    }

    const message = body.message.text;
    const chatId = body.message.chat.id;

    // Echo logic (replace this with your bot logic)
    const reply = `🧠 SwarmBot received: "${message}"`;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const sendMessageUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const payload = {
      chat_id: chatId,
      text: reply,
    };

    await fetch(sendMessageUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    res.status(200).json({ ok: true, message: 'Replied to user.' });

  } catch (error) {
    console.error('❌ Telegram bot error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
