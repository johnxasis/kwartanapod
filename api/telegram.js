module.exports = (req, res) => {
  if (req.method === "POST") {
    console.log("Received POST on /api/telegram:", req.body);
    res.status(200).json({ status: "OK", message: "Telegram bot initialized." });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
