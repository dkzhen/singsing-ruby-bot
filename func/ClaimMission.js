const dotenv = require("dotenv");
const fs = require("fs").promises;
const axios = require("axios");
const { getTokenAuth } = require("./getToken");
dotenv.config();

const API_URL = "https://miniapp-api.singsing.net/mission?type=bonus_vault";
const CLAIM_API_URL = "https://miniapp-api.singsing.net/mission/check";
const API_BE_URL =
  process.env.API_URL || "http://localhost:101/bot/sendMessage";

exports.claimMission = async function () {
  try {
    // Read the JSON file containing tokens
    const tokens = await getTokenAuth();

    if (tokens !== null) {
      const tokenFilter = tokens.filter((token) => token.telegramId !== null);
      for (const token of tokenFilter) {
        try {
          const response = await axios.get(API_URL, {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          });

          const missions = response.data.data; // Assuming missions data is in response.data.data

          // Loop through each mission and make API requests
          for (const mission of missions) {
            if (!mission.completed) {
              try {
                const BODY_DATA = {
                  mission_key: mission.key,
                };

                const claimResponse = await axios.post(
                  CLAIM_API_URL,
                  BODY_DATA,
                  {
                    headers: {
                      Authorization: `Bearer ${token.token}`,
                      "Content-Type": "application/json",
                    },
                  }
                );

                console.log(
                  `Claimed mission ${mission.key}. Response status: ${claimResponse.status} `
                );
                console.log(claimResponse.data);
              } catch (error) {
                console.error(
                  `Error claiming mission ${mission.key} with token ${token.token}:`,
                  error
                );
                // Continue to the next mission if there's an error
                continue;
              }
            }
          }
        } catch (error) {
          console.error(
            `Error fetching missions data with token ${token.token}:`,
            error
          );
          if (error.response && error.response.status === 401) {
            console.log(`Invalid token: ${token.token}`);
            await axios.post(`${API_BE_URL}/bot/sendMessage`, {
              chatId: token.telegramId,
              tokenId: token.id,
              message: `Token expired or invalid: \n Bot : ${token.botId} \n TelegramId : ${token.telegramId} \n Token : ${token.token}`,
            });
          }
          // Continue to the next token if there's an error fetching missions data
          continue;
        }
      }
    } else {
      console.log("No tokens found.");
    }
  } catch (error) {
    console.error("Error reading tokens file:", error);
  }
};
