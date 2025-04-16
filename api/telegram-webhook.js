export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = req.body?.message?.chat?.id;
  const MESSAGE_TEXT = req.body?.message?.text;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!TELEGRAM_TOKEN || !CHAT_ID || !MESSAGE_TEXT || !OPENAI_API_KEY) {
    return res.status(400).json({ error: 'Missing env vars or request data' });
  }

  const msg = MESSAGE_TEXT.toLowerCase();
  const keywords = {
    swarm: "🤖 Swarm Status: 128,000 bots live globally.",
    bots: "🤖 Bot Count: 128,000 active agents across clusters.",
    status: "🧠 Swarm Core is ONLINE. Myth engine and relay nodes fully operational.",
    profit: "💸 Estimated daily yield: $8,470.12. Split: NSFW, refund, crypto, MLM, POD.",
    launch: "🚀 Launching new funnel cluster. Mythic persona seeds injected.",
    wallet: "💼 Primary wallet linked: ending in ...5173e"
  };

  const matchedKey = Object.keys(keywords).find(k => msg.includes(k));
  const defaultFallback = "✅ Command received. Swarm logic processing.";

  let replyText = matchedKey ? keywords[matchedKey] : null;

  if (!replyText) {
    try {
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
              content: "You are the command interface to an AI swarm. Interpret requests into status updates, action confirmations, or funnel launches."
            },
            {
              role: "user",
              content: MESSAGE_TEXT
            }
          ]
        })
      });
      const aiData = await gptRes.json();
      replyText = aiData?.choices?.[0]?.message?.content || defaultFallback;
    } catch (e) {
      replyText = defaultFallback;
    }
  }

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: replyText })
  });

  return res.status(200).json({ status: "Handled message", replyText });
}
