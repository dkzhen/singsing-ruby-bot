const axios = require("axios");

exports.getTokenAuth = async () => {
  try {
    const API_URL =
      process.env.API_URL || "http://localhost:101/token/@cowtopia";
    const response = await axios.get(`${API_URL}/token/@cowtopia`);
    const data = response.data.data;
    const [token] = data.map((item) => item.tokenList);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};
