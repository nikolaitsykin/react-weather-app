import { DateTime } from "luxon";

export const getCardinalDirection = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(angle / 45) % 8];
};

export const isToday = (dt, timezone) => {
  const currentTime = DateTime.now().setZone(timezone).toSeconds();
  const today = DateTime.fromSeconds(dt).setZone(timezone);
  return currentTime > today;
};

export const isNow = (dt, timezone) => {
  const now = DateTime.now().setZone(timezone);
  const currentHour = DateTime.fromSeconds(dt).setZone(timezone).toSeconds();
  return currentHour <= now.ts;
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

export const sunsetSwitch = (sunsetEpoch, timezone) => {
  const currentTime = DateTime.now().setZone(timezone).toSeconds();
  const sunsetTime = DateTime.fromSeconds(sunsetEpoch).setZone(timezone).toSeconds();
  return currentTime < sunsetTime;
};

export const backgroundSwitch = ({
  datetimeEpoch,
  sunriseEpoch,
  sunsetEpoch,
  timezone,
  icon,
}) => {
  const currentHour = formatHourTwentyFour(datetimeEpoch, timezone);
  const sunsetHour = formatHourTwentyFour(sunsetEpoch, timezone);
  const sunriseHour = formatHourTwentyFour(sunriseEpoch, timezone);

  if (currentHour === sunsetHour || currentHour === sunriseHour) {
    return currentHour === sunsetHour ? "sunset" : "sunrise";
  }
  if (icon === "cloudy" && currentHour > sunsetHour) {
    return "cloudy-night";
  }
  return icon;
};

export function pressureDescription(pressure) {
  const descriptions = [
    "The pressure is lower than normal",
    "The pressure is within normal limits",
    "The pressure is higher than normal",
  ];
  return descriptions[Math.min(2, Math.floor((pressure - 1009) / 3))];
}

export function uvIndexDescription(uvindex) {
  const uvIndexDescriptions = {
    "0-2": { description: "You can safely enjoy being outside", label: "Low" },
    "3-5": { description: "Seek shade during midday hours", label: "Moderate" },
    "6-7": { description: "Seek shade during midday hours", label: "High" },
    "8-": { description: "Avoid being outside during midday hours", label: "Very high" },
  };
  const range = `${uvindex <= 2 ? 0 : Math.ceil(uvindex - 1)}-${uvindex < 8 ? 2 : Math.floor(uvindex)}`;
  return uvIndexDescriptions[range] || { description: "", label: "" };
}

export function feelsLikeDescription(feelslike, temp, wind, humidity) {
  if (feelslike > temp) return "Feels warmer than it is";
  if (feelslike > temp && humidity > 70) return "Humidity is making it feel warmer";
  if (feelslike < temp) return "Feels cooler than it is";
  if (feelslike < temp && wind >= 4) return "Wind is making it feel cooler";
  return "Similar to the actual temperature";
}

export const substring = (str) => {
  const maxLength = 13;
  return str.length <= maxLength ? str : `${str.slice(0, maxLength)}...`;
};

export const findUniqueObj = (arr, newObj) => {
  const newObjKey = Object.keys(newObj)[0];
  const existingObj = arr.find((obj) => Object.keys(obj)[0] === newObjKey);
  if (existingObj) return arr;
  return [...arr, newObj];
};
