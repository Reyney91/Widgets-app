import axios from "axios";
const key = 'e8ee5d05a9584c53b8a201525241204'
const baseURL = `http://api.weatherapi.com/v1/current.json?key=${key}&lang=ru`;
export const weatherService = {
  async getByCity(city: string) {
    const responce = await axios.get(baseURL + `&q=${city}`, { headers: { 'Content-Type': 'application/json' } });
    return responce.data;
  },
};
