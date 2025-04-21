export default async function handler(req, res) {
  if (req.method === "POST") {
    const message = req.body.message?.text;
    const chatId = req.body.message?.chat.id;

    if (message && chatId) {
      // Example reply using fetch
      const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `SwarmBot received: "${message}"`,
        }),
      });
    }

    return res.status(200).send("OK");
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
