export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const message = req.body?.message?.text || 'No message';
  console.log(`Telegram Message: ${message}`);
  res.status(200).send('OK');
}