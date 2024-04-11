import { DateTime } from "luxon";

export const getCardinalDirection = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(angle / 45) % 8];
};

export const isToday = (dt, timezone) => {
  const currentTime = DateTime.now().setZone(timezone);
  const today = DateTime.fromSeconds(dt).setZone(timezone);
  return currentTime.ts > today;
};

export const isNow = (dt, timezone) => {
  const now = DateTime.now().setZone(timezone);
  const currentHour = DateTime.fromSeconds(dt).setZone(timezone);

  return currentHour.ts <= now.ts;
};

export const formatTime = (dt, timezone, format = "h:mm'") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export const formatTimeFull = (dt, timezone, format = "h:mma'") =>
  DateTime.fromMillis(dt).setZone(timezone).toFormat(format);

export const formatAmPm = (dt, timezone, format = "a'") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export const formatHours = (dt, timezone, format = "ha'") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export const formatHour = (dt, timezone, format = "h") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);
  
  export const formatHourTwentyFour = (dt, timezone, format = "HH") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export const formatDate = (dt, timezone, format = "LLL dd'") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export const formatDayOfWeek = (dt, timezone, format = "ccc") =>
  DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);

export function sunsetSwitch(sunsetEpoch, timezone) {
  const currentTime = DateTime.now();
  const currentHour = formatHour(currentTime.ts, timezone);
  const sunsetTime = formatHour(sunsetEpoch, timezone);
  const isSunset = currentHour > sunsetTime ? true : false;
  return isSunset;
}

export const backgroundSwitch = (data) => {
  let background;
  let currentHour = formatHourTwentyFour(data.datetimeEpoch, data.timezone);
  let sunsetHour = formatHourTwentyFour(data.sunsetEpoch, data.timezone);
  let sunriseHour = formatHourTwentyFour(data.sunriseEpoch, data.timezone);

  if ( currentHour === sunsetHour) {
    background = "sunset";
  } else if ( currentHour === sunriseHour) {
    background = "sunrise";
  } else if (currentHour > sunsetHour && data.icon === "cloudy") {
    background = "cloudy-night";
  } else background = data.icon;

  return background;
};

export function pressureDescription(pressure) {
  let description;
  if (pressure > 1022) {
    description = "The pressure is higher than normal";
  } else if (pressure < 1009) {
    description = "The pressure is lower than normal";
  } else {
    description = "The pressure is within normal limits";
  }
  return description;
}

export function uvIndexDescription(uvindex) {
  let uvValues = {
    description: "",
    value: "",
  };
  if (uvindex <= 2) {
    uvValues.description = "You can safely enjoy being outside";
    uvValues.label = "Low";
  } else if (uvindex <= 5) {
    uvValues.description = "Seek shade during midday hours";
    uvValues.label = "Moderate";
  } else if (uvindex <= 7) {
    uvValues.description = "Seek shade during midday hours";
    uvValues.label = "High";
  } else if (uvindex > 7) {
    uvValues.description = "Avoid being outside during midday hours";
    uvValues.label = "Very high";
  }
  return uvValues;
}

export function feelsLikeDescription(feelslike, temp, wind, humidity) {
  let description;
  if (feelslike > temp) {
    description = "Feels warmer then it is";
  } else if (feelslike > temp && humidity > 70) {
    description = "Humidity is making it feel warmer";
  } else if (feelslike < temp) {
    description = "Feels cooler then it is";
  } else if (feelslike < temp && wind >= 4) {
    description = "Wind is making it feel cooler";
  } else {
    description = "Similar to the actual temperature";
  }
  return description;
}

export const substring = (str) => {
  return str.length > 13 ? str.substring(0, 10) + "..." : str;
};

export const findUniqueObj = (arr, newObj) => {
  const isUnique = arr.every((obj) => {
    const newObjKeys = Object.keys(newObj);
    const objKeys = Object.keys(obj);

    return newObjKeys.every((key) => !objKeys.includes(key));
  });
  // console.log(isUnique);
  // console.log(arr);
  return isUnique ? arr.push(newObj) : arr;
};