import axios from 'axios';

const API_KEY = '472577c6297a1232a60dd223bdaf599a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},in&units=metric`;
  const request = axios.get(url);

  console.log('Request:', request);
  return{
    type : FETCH_WEATHER,
    payload : request
  };
}
