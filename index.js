const cron = require("node-cron");
const express = require("express");
const { claimMission } = require("./func/ClaimMission");
const { getTokenAuth } = require("./func/getToken");
const { validateToken } = require("./func/checkValidation");

// Schedule the task to run every hour on the hour
claimMission();
console.log(`[ BOT ] : Bot starting...`);
cron.schedule("0 * * * *", claimMission);

// Start the server
const port = process.env.PORT || 102;
const app = express();

app.get("/", (req, res) => {
  res.send("API cron job server is running");
});

app.listen(port, async () => {
  console.log(`[ BOT ] : Server is running on port ${port}`);
});
