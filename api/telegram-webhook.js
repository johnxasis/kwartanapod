export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = req.body?.message?.chat?.id;
  const MESSAGE_TEXT = req.body?.message?.text;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!TELEGRAM_TOKEN || !CHAT_ID || !MESSAGE_TEXT || !OPENAI_API_KEY) {
    return res.status(400).json({ error: 'Missing env vars or request data' });
  }

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
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
          content: "You are the command parser for a swarm of profit bots. Interpret user intent as structured swarm actions."
        },
        {
          role: "user",
          content: MESSAGE_TEXT
        }
      ]
    })
  });

  const aiData = await openaiRes.json();
  const gptReply = aiData?.choices?.[0]?.message?.content || "Command received.";

  const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: gptReply })
  });

  return res.status(200).json({ status: "Responded via GPT", gptReply });
}
