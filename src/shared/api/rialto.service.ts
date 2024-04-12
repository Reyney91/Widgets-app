import axios from "axios";
const baseURL = "https://www.cbr-xml-daily.ru/daily_json.js";
export const rialtoService = {
  async getAll() {
    const responce = await axios.get(baseURL);
    return responce.data;
  },
};
