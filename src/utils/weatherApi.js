const { DateTime } = require("luxon");
const LOCATION_API_KEY = "837c274c3fdc4368ad1808e316cbeb2f";
const LOCATION_BASE_API_URL = "https://api.geoapify.com/v1/ipinfo?apiKey=";
const LOCATION_URL = `${LOCATION_BASE_API_URL + LOCATION_API_KEY}`;
const API_KEY = "93ATYEL3TVAAGNXCQGRJ3AE5V";
const X_RAPIDAPI_KEY = "fa2548147dmsh0fca6852436d44ap115b69jsn7545eb2287be";
const CURRENT_LOCATION_URL = "https://geolocation-db.com/json/";
const AUTOCOMPLETE_URL = "wft-geo-db.p.rapidapi.com";
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const handleRequest = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((error) => Promise.reject(error));
};

const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": AUTOCOMPLETE_URL,
  },
};

export const loadOptions = async (location) => {
  const response = await fetch(
    `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${location}`,
    geoApiOptions
  );
  const result = await response.json();

  return {
    options: result.data.map((city) => {
      return {
        lat: city.latitude,
        lon: city.longitude,
        city: city.name,
        country: city.countryCode,
      };
    }),
  };
};

export async function getPublicIp() {
  const result = await fetch(CURRENT_LOCATION_URL);
  const data = await handleRequest(result);
  return data.city.name;
}

export async function getLocation() {
  const result = await fetch(LOCATION_URL);
  const data = await handleRequest(result);
  return data;
}

getLocation();

async function getWeatherDataApi(city, units) {
  const url = new URL(
    BASE_URL + `${city}?unitGroup=${units}&key=${API_KEY}&contentType=json`
  );
  const result = await fetch(url);
  const data = await handleRequest(result);

  // console.log(data);

  return data;
}

const formatCurrentWeatherApi = (data) => {
  const {
    latitude,
    longitude,
    description,
    address,
    timezone,
    currentConditions: {
      datetime,
      datetimeEpoch,
      sunriseEpoch,
      sunsetEpoch,
      conditions,
      dew,
      temp,
      feelslike,
      icon,
      moonphase,
      precip,
      uvindex,
      visibility,
      winddir,
      windgust,
      windspeed,
      humidity,
      pressure,
    },
  } = data;

  const pressureInInches = Number(pressure * 0.0295301).toFixed(2);

  const temp_min = data.days[0].tempmin;
  const temp_max = data.days[0].tempmax;

  const days = data.days.slice(0, 14);

  const hours = data.days[0].hours
    .filter(
      (hour) =>
        hour.datetime.slice(0, 2) >= DateTime.now().setZone(timezone).c.hour
    )
    .concat(data.days[1].hours)
    .slice(0, 24);
  // console.log(hours);

  return {
    timezone,
    datetimeEpoch,
    datetime,
    latitude,
    longitude,
    description,
    address,
    conditions,
    dew,
    temp,
    feelslike,
    icon,
    moonphase,
    precip,
    sunriseEpoch,
    sunsetEpoch,
    uvindex,
    visibility,
    winddir,
    windgust,
    windspeed,
    temp_min,
    temp_max,
    humidity,
    pressure,
    pressureInInches,
    days,
    hours,
  };
};

export const getFormattedWeatherDataApi = async (city, units) => {
  const weatherData = await getWeatherDataApi(city, units);
  return formatCurrentWeatherApi(weatherData);
};