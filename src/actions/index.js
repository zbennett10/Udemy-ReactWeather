import axios from 'axios';


const API_KEY = '85e1b2053044b0b83bfc68fe81f8e8dc';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //store action into variable to get rid magic strings

//this action contains the api request that is made upon SearchBar form submission
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //returns promise after call to weather api


    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


