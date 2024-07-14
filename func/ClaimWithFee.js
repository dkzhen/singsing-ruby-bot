const axios = require("axios");
const dotenv = require("dotenv");
const { getTokenAuth } = require("./getToken");

dotenv.config();
async function callAPI() {
  const url = "https://miniapp-api.singsing.net/claim";

  const getLatestToken = async () => {
    // Assume getTokenAuth retrieves an array of tokens
    const tokens = await getTokenAuth(); // Replace with your actual function
    if (tokens !== null) {
      const tokenFilter = tokens.filter(
        (token) => token.telegramId === 1370196228
      );
      // Find the token with the highest ID (assuming IDs are numeric and represent creation order)
      const latestToken = tokenFilter.reduce((prevToken, currentToken) => {
        return prevToken.id > currentToken.id ? prevToken : currentToken;
      });
      return latestToken;
    } else {
      return null;
    }
  };
  const token = await getLatestToken();
  if (token !== null) {
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      const { sign, expire_time } = response.data.data;
      return { sign, expire_time };
    } catch (error) {
      console.error("Error calling API:", error);
      throw error;
    }
  } else {
    return null;
  }
}

module.exports = callAPI;
