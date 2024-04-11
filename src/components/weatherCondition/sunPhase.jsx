import { ReactComponent as SunriseIcon } from "../../icons/sunrise.svg";
import { ReactComponent as SunsetIcon } from "../../icons/sunset.svg";
import { formatAmPm, formatTime, sunsetSwitch } from "../../utils/helpers";

export function SunPhase({ weather: { sunsetEpoch, sunriseEpoch, timezone } }) {
  const isSunset = sunsetSwitch(sunsetEpoch, timezone);
  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
        {isSunset ? (
          <>
            <div className="h-4 flex ">
              <span className="w-3.5 flex color-[#ffffffae] justify-center">
                <SunsetIcon />
              </span>
              <span className="text-[#ffffffae] m-1 text-xs font-ligth justify-start self-center">
                Sunset
              </span>
            </div>
            <div className="flex flex-col justify-start h-8">
              <div>
                <span className="text-3xl text-white">
                  {formatTime(sunsetEpoch, timezone)}
                </span>
                <span className="text-xl text-white">
                  {formatAmPm(sunsetEpoch, timezone)}
                </span>
              </div>
            </div>
            <div className="flex justify-start items-end h-8">
              <span className="text-xs text-white flex items-end">
                Sunrise: {formatTime(sunriseEpoch, timezone)}
              </span>
              <span className="text-xs text-white">
                {formatAmPm(sunriseEpoch, timezone)}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="h-4 flex">
              <span className="w-3.5 color-[#ffffffae] flex justify-center">
                <SunriseIcon />
              </span>
              <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
                Sunrise
              </span>
            </div>
            <div className="flex flex-col justify-start h-8">
              <div>
                <span className="text-3xl text-white">
                  {formatTime(sunriseEpoch, timezone)}
                </span>
                <span className="text-xl text-white">
                  {formatAmPm(sunriseEpoch, timezone)}
                </span>
              </div>
            </div>
            <div className="flex justify-start items-end h-8">
              <span className="text-xs text-white flex items-end">
                Sunset: {formatTime(sunsetEpoch, timezone)}
              </span>
              <span className="text-xs text-white">
                {formatAmPm(sunsetEpoch, timezone)}
              </span>
            </div>
          </>
        )}
    </div>
  );
}