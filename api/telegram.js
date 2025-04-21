export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body?.message?.text || 'No message';
    console.log(`Telegram Message: ${message}`);
    return res.status(200).send('OK');
  } else {
    return res.status(405).send('Method Not Allowed');
  }
}