export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const message = req.body?.message?.text || 'No message';
    console.log(`📥 Telegram Message: ${message}`);

    // You can add logic here to reply, log, etc.

    res.status(200).send('OK');
  } catch (error) {
    console.error('❌ Error handling Telegram webhook:', error);
    res.status(500).send('Internal Server Error');
  }
}
