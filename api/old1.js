export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = req.body?.message?.chat?.id;
  const MESSAGE_TEXT = req.body?.message?.text?.toLowerCase();
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!TELEGRAM_TOKEN || !CHAT_ID || !MESSAGE_TEXT || !REDIS_URL || !REDIS_TOKEN) {
    return res.status(400).json({ error: "Missing config or message data" });
  }

  const fetchRedis = async (key) => {
    const r = await fetch(`${REDIS_URL}/get/${key}`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
    });
    const json = await r.json();
    return json.result || null;
  };

  const setRedis = async (key, value) => {
    await fetch(`${REDIS_URL}/set/${key}/${encodeURIComponent(value)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
    });
  };

  let replyText = null;

  try {
    // Ask GPT if this message includes an intent to update swarm state
    const prompt = `
You're the command parser for a Redis-powered AI swarm. Interpret user messages and return JSON with any values they intend to update.

Example:
User: "update swarm to 30000 bots"
Response: { "botCount": 30000 }

User: "profit today is 842.75"
Response: { "dailyProfitUSD": 842.75 }

User: "change mode to cosmic"
Response: { "swarmMode": "cosmic" }

User: "hello there"
Response: {}

Now respond ONLY with the JSON that would update Redis, based on this user input:
"${MESSAGE_TEXT}"
`;

    const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You interpret commands to update Redis swarm state." },
          { role: "user", content: prompt }
        ]
      })
    });

    const gptReply = await gptRes.json();
    const content = gptReply?.choices?.[0]?.message?.content || "{}";
    let updatePayload = {};

    try {
      updatePayload = JSON.parse(content);
    } catch {
      updatePayload = {};
    }

    const keys = Object.keys(updatePayload);
    if (keys.length > 0) {
      for (const key of keys) {
        await setRedis(key, updatePayload[key]);
      }
      replyText = `✅ Swarm updated: ${keys.map(k => `${k} = ${updatePayload[k]}`).join(", ")}`;
    } else if (MESSAGE_TEXT.includes("bot")) {
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
      replyText = "✅ Command received.";
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
