import express from "express";
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
    const message = req.body?.message?.text || "No message";
    console.log(`Telegram Message: ${message}`);
    res.status(200).send("OK");
});

export default app;