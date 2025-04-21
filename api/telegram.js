export default function handler(req, res) {
  if (req.method === "POST") {
    const msg = req.body?.message?.text;
    console.log("Telegram Message:", msg);
    res.status(200).send("OK");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
