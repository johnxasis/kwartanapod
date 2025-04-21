const express = require('express');
const { handleTelegramWebhook } = require('./lib/autopilot');
const app = express();
app.use(express.json());
app.post('/api/telegram', handleTelegramWebhook);
app.listen(3000, () => console.log("SwarmBot v1.5-AutoOps live."));