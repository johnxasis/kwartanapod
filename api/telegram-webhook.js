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
    try {
      const r = await fetch(`${REDIS_URL}/set/${key}/${encodeURIComponent(value)}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` }
      });
      const result = await r.json();
      return result;
    } catch (err) {
      return { error: err.message };
    }
  };

  let replyText = null;

  try {
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

    // Try to extract clean JSON
    const match = content.match(/{[\s\S]*}/);
    const jsonString = match ? match[0] : "{}";

    let updatePayload = {};
    let fallbackPayload = {};
    let parseError = null;

    try {
      updatePayload = JSON.parse(jsonString);
    } catch (err) {
      updatePayload = {};
      parseError = err.message;
    }

    // If JSON is empty, try fallback logic based on keywords
    if (Object.keys(updatePayload).length === 0) {
      const fallbackMatch = MESSAGE_TEXT.match(/(bot|profit|mode|pulse)[^\d\w]*(\d+(\.\d+)?|[a-z\-]+)/i);
      if (fallbackMatch) {
        const key = fallbackMatch[1].toLowerCase();
        const value = fallbackMatch[2];
        if (key === "bot") fallbackPayload = { botCount: parseInt(value) };
        if (key === "profit") fallbackPayload = { dailyProfitUSD: parseFloat(value) };
        if (key === "mode") fallbackPayload = { swarmMode: value };
        if (key === "pulse") fallbackPayload = { lastPulse: value };
        updatePayload = fallbackPayload;
      }
    }

    const keys = Object.keys(updatePayload);
    if (keys.length > 0) {
      const results = {};
      for (const key of keys) {
        const result = await setRedis(key, updatePayload[key]);
        results[key] = result;
      }
      replyText = `✅ Final Update: ${JSON.stringify(updatePayload)}
🔁 Redis: ${JSON.stringify(results)}`;
    } else {
      replyText = `⚠️ No valid update intent detected.
🧠 GPT said: ${content}`;
    }

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: replyText })
    });

    return res.status(200).json({ status: "Processed with fallback", replyText });
  } catch (err) {
    return res.status(500).json({ error: "Webhook error", detail: err });
  }
}
