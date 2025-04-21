export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body?.message?.text || 'No message';
    console.log(`Telegram Message: ${message}`);
    res.status(200).send('OK');
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}
