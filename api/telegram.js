export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body?.message;
    const text = message?.text || 'No message';
    const chatId = message?.chat?.id;

    console.log(`💬 Received: ${text} from Chat ID: ${chatId}`);

    if (chatId && text.toLowerCase() === 'start') {
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: '✅ Bot received your message!'
        })
      });
    }

    res.status(200).send('OK');
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}
