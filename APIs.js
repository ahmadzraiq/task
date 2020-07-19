import axios from "axios";

export const getCurrencies = async () => {
  const response = await axios.get(
    "https://api.jsonbin.io/b/5efef9e10bab551d2b6b2340"
  );
  return response;
};
