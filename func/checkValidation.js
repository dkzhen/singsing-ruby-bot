const { default: axios } = require("axios");
const { configDotenv } = require("dotenv");
const { getTokenAuth } = require("./getToken");
const { getMission } = require("./repo");
configDotenv();

exports.validateToken = async () => {
  const tokens = await getTokenAuth();
  if (tokens === null) return null;
  const validToken = [];
  for (const token of tokens) {
    try {
      await getMission(token.token);

      validToken.push(token);
    } catch (error) {
      console.log(`[ Error ] : token not valid , response code : ${error}`);
    }
  }
  console.log(`[ Token valid ] : ${validToken.length}\n`);
  return validToken;
};
