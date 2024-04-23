import { ReactComponent as SunriseIcon } from "../../icons/sunrise.svg";
import { ReactComponent as SunsetIcon } from "../../icons/sunset.svg";
import { formatAmPm, formatTime, sunsetSwitch } from "../../utils/helpers";

export function SunPhase({ weather: { sunsetEpoch, sunriseEpoch, timezone } }) {
  const isSunset = sunsetSwitch(sunsetEpoch, timezone);
  const formatData = (epoch) => ({
    time: formatTime(epoch, timezone),
    ampm: formatAmPm(epoch, timezone),
  });
  const data = isSunset
    ? { sunset: formatData(sunsetEpoch), sunrise: formatData(sunriseEpoch) }
    : { sunrise: formatData(sunriseEpoch), sunset: formatData(sunsetEpoch) };
  const headerTitleStyle =
    "text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center";

  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <span className={`w-3.5 color-["#ffffffae"] flex justify-center`}>
          {isSunset ? <SunsetIcon /> : <SunriseIcon />}
        </span>
        <span className={headerTitleStyle}>{isSunset ? "Sunset" : "Sunrise"}</span>
      </div>
      <div className="flex flex-col justify-start h-8">
        <div>
          <span className="text-3xl text-white">
            {data[isSunset ? "sunset" : "sunrise"].time}
          </span>
          <span className="text-xl text-white">
            {data[isSunset ? "sunset" : "sunrise"].ampm}
          </span>
        </div>
      </div>
      <div className="flex justify-start items-end h-8">
        <span className="text-xs text-white flex items-end">
          {isSunset
            ? `Sunrise: ${data.sunrise.time}`
            : `Sunset: ${data.sunset.time}`}
        </span>
        <span className="text-xs text-white">
          {isSunset ? data.sunrise.ampm : data.sunset.ampm}
        </span>
      </div>
    </div>
  );
}
