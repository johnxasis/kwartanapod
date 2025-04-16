import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: process.env.FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = req.body?.message?.chat?.id;
  const MESSAGE_TEXT = req.body?.message?.text;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!TELEGRAM_TOKEN || !CHAT_ID || !MESSAGE_TEXT || !OPENAI_API_KEY) {
    return res.status(400).json({ error: 'Missing env vars or message data' });
  }

  const dbRef = ref(db);
  const msg = MESSAGE_TEXT.toLowerCase();

  try {
    let replyText = null;

    if (msg.includes("bot")) {
      const snapshot = await get(child(dbRef, 'swarm/botCount'));
      replyText = `🤖 Active Bots: ${snapshot.val()}`;
    } else if (msg.includes("profit")) {
      const snapshot = await get(child(dbRef, 'swarm/dailyProfitUSD'));
      replyText = `💸 Profit Today: $${snapshot.val()}`;
    } else if (msg.includes("status")) {
      const modeSnap = await get(child(dbRef, 'swarm/swarmMode'));
      const pulseSnap = await get(child(dbRef, 'swarm/lastPulse'));
      replyText = `🧠 Status: ${modeSnap.val().toUpperCase()} | Last Pulse: ${pulseSnap.val()}`;
    } else {
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
              content: "You are the AI command parser for a global bot swarm. Answer concisely and intelligently."
            },
            {
              role: "user",
              content: MESSAGE_TEXT
            }
          ]
        })
      });
      const aiData = await openaiRes.json();
      replyText = aiData?.choices?.[0]?.message?.content || "✅ Command acknowledged.";
    }

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: replyText })
    });

    return res.status(200).json({ status: "Message processed", replyText });
  } catch (e) {
    return res.status(500).json({ error: "Failed to handle Telegram command", detail: e });
  }
}
