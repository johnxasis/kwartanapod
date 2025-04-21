// Entry point
require('dotenv').config();
const { initTelegram } = require('./lib/telegram');
const { runTasks } = require('./swarm/tasks');

(async () => {
  await runTasks();
  initTelegram();
})();