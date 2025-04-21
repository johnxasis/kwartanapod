// /api/telegram.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;

    console.log('Received update:', JSON.stringify(body));

    // Check if it contains a message
    if (body.message && body.message.text) {
      const text = body.message.text;
      const chatId = body.message.chat.id;

      // Respond back using Telegram API (optional)
      // await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ chat_id: chatId, text: `You said: ${text}` }),
      // });

      console.log(`Handled message: ${text}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
