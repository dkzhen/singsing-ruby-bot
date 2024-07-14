const axios = require("axios");
const dotenv = require("dotenv");
const { getTokenAuth } = require("./getToken");

dotenv.config();
async function callAPI() {
  const url = "https://miniapp-api.singsing.net/claim";

  const getLatestToken = async () => {
    // Assume getTokenAuth retrieves an array of tokens
    const tokens = await getTokenAuth(); // Replace with your actual function

    // Find the token with the highest ID (assuming IDs are numeric and represent creation order)
    const latestToken = tokens.reduce((prevToken, currentToken) => {
      return prevToken.id > currentToken.id ? prevToken : currentToken;
    });

    return latestToken;
  };
  const token = await getLatestToken();

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
}

module.exports = callAPI;
