import { DateTime } from "luxon";
import { useCallback, useEffect, useState } from "react";
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
  units,
  remove,
  setWeather,
  setBackground,
  selectOnClick,
  isActive,
}) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getFormattedWeatherDataApi(city, units);
      setCurrentWeather(weatherData);
    };
    fetchWeather();
  }, [city, units]);

  const handleClick = useCallback(() => {
    selectOnClick();
    setWeather(currentWeather);
    setBackground(backgroundSwitch(currentWeather));
  }, [currentWeather, selectOnClick, setWeather, setBackground]);

  if (!currentWeather) return null;

  const { address, timezone, temp, temp_max, temp_min, conditions } =
    currentWeather;
  const isMyLocation = location === address;
  const formattedTime = formatTimeFull(DateTime.now().ts, timezone);
  const roundedTemp = Math.round(temp);
  const roundedMinTemp = Math.round(temp_min);
  const roundedMaxTemp = Math.round(temp_max);
  const minMaxTempStyle =
    "text-[11px] font-normal text-[#fffefe89] flex justify-between";
  const tempStyle =
    "text-4xl font-extralight text-white flex items-start self-end";

  return (
    <div
      className={`${
        isActive ? "bg-[#dedddd52]" : "bg-[#50505133]"
      } relative max-w-60 min-w-42 w-full h-auto rounded-lg [&>button]:hover:opacity-100`}
    >
      <button
        className="absolute w-3.5 h-3.5 right-0 cursor-pointer z-10 opacity-0 "
        onClick={() => (isMyLocation ? null : remove(favourite))}
      >
        <CancelIcon className="active:fill-[#e0dede]" />
      </button>
      <div
        onClick={handleClick}
        className="flex flex-row justify-between p-2 z-0 active: rounded-lg"
      >
        <div className="flex flex-col justify-between">
          <span className="text-[13px] font-normal text-white self-start items-start">
            {isMyLocation ? "My Location" : substring(address)}
          </span>
          <span className="text-[11px] font-normal text-[#fffefe89] self-start">
            {isMyLocation ? address : formattedTime}
          </span>
          <span className="text-[11px] font-normal text-[#fffefe89] self-start">
            {conditions}
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className={tempStyle}>{roundedTemp}</span>
          <span className={minMaxTempStyle}>
            H:{roundedMinTemp}
            L:{roundedMaxTemp}
          </span>
        </div>
      </div>
    </div>
  );
}
