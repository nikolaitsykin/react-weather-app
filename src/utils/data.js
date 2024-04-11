import { ReactComponent as Day } from "../icons/static/clear-day.svg";
import { ReactComponent as Night } from "../icons/static/clear-night.svg";
import { ReactComponent as CloudyDay } from "../icons/static/cloudy-day.svg";
import { ReactComponent as CloudyNight } from "../icons/static/cloudy-night.svg";
import { ReactComponent as Cloudy } from "../icons/static/cloudy.svg";
import { ReactComponent as Dust } from "../icons/static/dust.svg";
import { ReactComponent as FogDay } from "../icons/static/fog-day.svg";
import { ReactComponent as FogNight } from "../icons/static/fog-night.svg";
import { ReactComponent as Fog } from "../icons/static/fog.svg";
import { ReactComponent as FrostDay } from "../icons/static/frost-day.svg";
import { ReactComponent as FrostNight } from "../icons/static/frost-night.svg";
import { ReactComponent as PossibleThunderStormDay } from "../icons/static/isolated-thunderstorms-day.svg";
import { ReactComponent as PossibleThunderStormNight } from "../icons/static/isolated-thunderstorms-night.svg";
import { ReactComponent as Rain } from "../icons/static/rainy-3.svg";
import { ReactComponent as RainyDay } from "../icons/static/rainy-day.svg";
import { ReactComponent as RainyNight } from "../icons/static/rainy-night.svg";
import { ReactComponent as SnowyDay } from "../icons/static/snowy-day.svg";
import { ReactComponent as SnowyNight } from "../icons/static/snowy-night.svg";
import { ReactComponent as Snow } from "../icons/static/snowy.svg";
import { ReactComponent as ThunderStorm } from "../icons/static/thunderstorms.svg";
import { ReactComponent as Wind } from "../icons/static/wind.svg";

export const icons = {
  "clear-day": <Day />,
  "clear-night": <Night />,
  "partly-cloudy-day": <CloudyDay />,
  "partly-cloudy-night": <CloudyNight />,
  "cloudy": <Cloudy />,
  "dust": <Dust />,
  "fog-day": <FogDay />,
  "fog-night": <FogNight />,
  "fog": <Fog />,
  "frost-day": <FrostDay />,
  "frost-night": <FrostNight />,
  "snow": <Snow />,
  "snow-showers-night": <SnowyNight />,
  "snow-showers-day": <SnowyDay />,
  "thunder-rain": <ThunderStorm />,
  "thunder-showers-day": <PossibleThunderStormDay />,
  "thunder-showers-night": <PossibleThunderStormNight />,
  "rain": <Rain />,
  "showers-day": <RainyDay />,
  "showers-night": <RainyNight />,
  "wind": <Wind />,
};

export const METRIC = "metric";
export const IMPERIAL = "us";
export const MPH = "MPH";
export const KMH = "KMH";
export const INCH = "inHg";
export const MM = "mb";

export const pressureScale = 0.0295301;

export const cities = [
  {
    id: 1,
    location: "New York",
    city: "Apex",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },

  {
    id: 2,
    location: "Los Angeles",
    city: "Los Angeles",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },

  {
    id: 3,
    location: "Europe/Moscow",
    city: "Moscow",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },
  {
    id: 4,
    location: "Europe/London",
    city: "London",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },
  {
    id: 5,
    location: "Asia/Tokyo",
    city: "Tokyo",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },
  {
    id: 6,
    location: "Europe/Berlin",
    city: "Berlin",
    time: "5:30PM",
    conditions: "Rain",
    temp: "17°",
    minTemp: "11°",
    maxTemp: "18°",
  },
];