export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Only POST allowed" });

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  const { amount, source } = req.body;

  if (!REDIS_URL || !REDIS_TOKEN || typeof amount !== 'number') {
    return res.status(400).json({ error: "Missing Redis config or invalid amount" });
  }

  const updateProfit = async (value) => {
    try {
      const r = await fetch(`${REDIS_URL}/get/dailyProfitUSD`, {
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
      });
      const current = await r.json();
      const currentVal = parseFloat(current.result || 0);
      const newVal = currentVal + value;

      const s = await fetch(`${REDIS_URL}/set/dailyProfitUSD/${encodeURIComponent(newVal)}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
      });
      return newVal;
    } catch (err) {
      return null;
    }
  };

  const updated = await updateProfit(amount);
  if (updated !== null) {
    return res.status(200).json({ success: true, updatedProfit: updated, source });
  } else {
    return res.status(500).json({ error: "Failed to update profit" });
  }
}
