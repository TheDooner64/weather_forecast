import axios from 'axios'
import { API_KEYS } from '../../secrets'

const WEATHER_API_KEY = API_KEYS['weather'];
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

// Defined the action type as a constant so we can export the variable and keep our types consistent
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  // Make the AJAX request, which will return a promise, and store it as the payload
  const request = axios.get(url);

  // Our redux-promise middleware will see the payload is a promise and stop the action until it resolves
  // Middleware is just a function an action passes through before hitting the reducer
  return {
    'type': FETCH_WEATHER,
    'payload': request
  };
}
