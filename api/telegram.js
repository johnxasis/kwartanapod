const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const message = req.body?.message?.text || 'No message';
  console.log(`Telegram Message: ${message}`);
  res.send('OK'); // Respond so Telegram stops complaining
});

module.exports = app;
