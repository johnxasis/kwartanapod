import { getRedis } from '../lib/redis'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body;
    const redis = getRedis();

    await redis.lpush('telegram:messages', JSON.stringify(body));

    return res.status(200).json({ message: 'Bot received and queued message', status: 'ok' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.toString() });
  }
}