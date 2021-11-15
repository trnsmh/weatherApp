import { API_KEY } from "./config";
const KEY = `&appid=${API_KEY}`;

const BASE_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const getWeather = {
  citySearchCelc: async (cityName, tempType) => {
    const endpoint = cityName
      ? `${BASE_API_URL}${cityName}&units=${tempType}${KEY}`
      : console.log(console.error());
    return await (await fetch(endpoint)).json();
  },
  citySearchFahr: async (cityName, tempType) => {
    const endpoint = cityName
      ? `${BASE_API_URL}${cityName}&units=${tempType}${KEY}`
      : console.log(console.error());

    return await (await fetch(endpoint)).json();
  },
  citySearchKelv: async (cityName, tempType) => {
    const endpoint = cityName
      ? `${BASE_API_URL}${cityName}&units=${tempType}${KEY}`
      : console.log(console.error());
    return await (await fetch(endpoint)).json();
  },

};



export default getWeather;
