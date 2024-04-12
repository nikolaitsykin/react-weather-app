import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { ReactComponent as CancelIcon } from "../../icons/cancel.svg";
import {
  backgroundSwitch,
  formatTimeFull,
  substring,
} from "../../utils/helpers";
import { getFormattedWeatherDataApi } from "../../utils/weatherApi";

export default function FavoriteItem({
  favourite,
  location,
  city,
  weather,
  units,
  remove,
  setWeather,
  setBackground,
  selectOnClick,
  isActive,
  setActive,
  active,
}) {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      let weatherData;
      weatherData = await getFormattedWeatherDataApi(city, units);
      if (location !== weatherData.address) {
        setCurrentWeather(weatherData);
      } else {
        setCurrentWeather(weatherData);
        if (!active) setActive(1);
      }
    };
    fetchWeather();
  }, [units]);

  const handleClick = () => {
    selectOnClick();
    setWeather(currentWeather);
    setBackground(backgroundSwitch(currentWeather));
  };

  return (
    currentWeather && (
      <div
        className={`${
          isActive ? "bg-[#dedddd52]" : "bg-[#50505133]"
        } relative max-w-60 min-w-42 w-full h-auto rounded-lg [&>button]:hover:opacity-100`}
      >
        <button
          className="absolute w-3.5 h-3.5 right-0 cursor-pointer z-10 opacity-0 "
          onClick={() => (location === city ? null : remove(favourite))}
        >
          <CancelIcon className="active:fill-[#e0dede]" />
        </button>
        <div
          onClick={handleClick}
          className="flex flex-row justify-between p-2 z-0 active: rounded-lg"
        >
          <div className="flex flex-col justify-between">
            <span className="text-[13px] font-normal text-white self-start items-start">
              {location === city ? "My Location" : substring(city)}
            </span>
            <span className="text-[11px] font-normal text-[#fffefe89] self-start">
              {location === city
                ? location
                : formatTimeFull(DateTime.now().ts, currentWeather.timezone)}
            </span>
            <span className="text-[11px] font-normal text-[#fffefe89] self-start">
              {currentWeather.conditions}
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-4xl font-extralight text-white flex items-start self-end ">
              {Math.round(currentWeather.temp)}
            </span>
            <span className="text-[11px] font-normal text-[#fffefe89] flex justify-between">
              H:{Math.round(currentWeather.temp_max)}
              L:{Math.round(currentWeather.temp_min)}
            </span>
          </div>
        </div>
      </div>
    )
  );
}
