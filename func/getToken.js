const axios = require("axios");

exports.getTokenAuth = async () => {
  try {
    const response = await axios.get("http://localhost:101/token/@cowtopia");
    const data = response.data.data;
    const [token] = data.map((item) => item.tokenList);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};
