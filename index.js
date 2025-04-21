const express = require("express");
const bodyParser = require("body-parser");
const { handleTelegramUpdate } = require("./swarmEngine");

const app = express();
app.use(bodyParser.json());

app.post("/api/telegram", async (req, res) => {
    const update = req.body;
    const response = await handleTelegramUpdate(update);
    res.status(200).send(response);
});

module.exports = app;