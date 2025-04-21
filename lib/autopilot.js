const { processEarnings } = require('./earn');
const { handleReferral } = require('./referral');

function handleTelegramWebhook(req, res) {
    const msg = req.body.message || {};
    const text = msg.text || "";
    
    if (text.startsWith("/start")) {
        res.send({ text: "🧠 SwarmBot v1.5 online. Type !earn, !refer or !upgrade." });
    } else if (text === "!earn") {
        processEarnings(msg.from.id, res);
    } else if (text === "!refer") {
        handleReferral(msg.from.id, res);
    } else {
        res.send({ text: "⚙️ Unknown command. Try !earn or !refer." });
    }
}
module.exports = { handleTelegramWebhook };