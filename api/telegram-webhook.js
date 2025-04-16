export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = req.body?.message?.chat?.id;
  const MESSAGE_TEXT = req.body?.message?.text?.toLowerCase();
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!TELEGRAM_TOKEN || !CHAT_ID || !MESSAGE_TEXT || !REDIS_URL || !REDIS_TOKEN) {
    return res.status(400).json({ error: "Missing Telegram, Redis, or message data" });
  }

  const fetchRedis = async (key) => {
    const r = await fetch(`${REDIS_URL}/get/${key}`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
    });
    const json = await r.json();
    return json.result || null;
  };

  let replyText = null;

  try {
    if (MESSAGE_TEXT.includes("bot")) {
      const count = await fetchRedis("botCount");
      replyText = `🤖 Active Bots: ${count || 0}`;
    } else if (MESSAGE_TEXT.includes("profit")) {
      const profit = await fetchRedis("dailyProfitUSD");
      replyText = `💸 Daily Profit: $${profit || "0.00"}`;
    } else if (MESSAGE_TEXT.includes("status") || MESSAGE_TEXT.includes("mode")) {
      const mode = await fetchRedis("swarmMode");
      const pulse = await fetchRedis("lastPulse");
      replyText = `🧠 Mode: ${mode?.toUpperCase() || "UNKNOWN"} | Last Pulse: ${pulse || "N/A"}`;
    } else {
      const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are the AI interface to a bot swarm. Provide helpful, clear, concise replies."
            },
            {
              role: "user",
              content: MESSAGE_TEXT
            }
          ]
        })
      });
      const ai = await gptRes.json();
      replyText = ai?.choices?.[0]?.message?.content || "✅ Command received.";
    }

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: replyText })
    });

    return res.status(200).json({ status: "Processed", replyText });
  } catch (err) {
    return res.status(500).json({ error: "Error in webhook", detail: err });
  }
}
