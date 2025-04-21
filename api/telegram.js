const token = process.env.TELEGRAM_BOT_TOKEN;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body?.message;
    const chatId = message?.chat?.id;
    const text = message?.text;

    console.log(`💬 Incoming from ${chatId}: ${text}`);

    if (text?.toLowerCase() === 'start') {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: '👋 Hello, I received your /start command!'
        })
      });
    }

    return res.status(200).send('OK');
  }

  res.status(405).send({ error: 'Method Not Allowed' });
}