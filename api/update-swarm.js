export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  const payload = req.body;

  if (!payload || !REDIS_URL || !REDIS_TOKEN) {
    return res.status(400).json({ error: "Missing body or Redis config" });
  }

  try {
    const results = {};
    for (const key in payload) {
      const value = payload[key];
      const r = await fetch(`${REDIS_URL}/set/${key}/${encodeURIComponent(value)}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
      });
      const json = await r.json();
      results[key] = json.result;
    }
    return res.status(200).json({ updated: results });
  } catch (err) {
    return res.status(500).json({ error: "Failed to update swarm", detail: err });
  }
}
