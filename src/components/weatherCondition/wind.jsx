import { ReactComponent as WindIcon } from "../../icons/wind-2.svg";
import { KMH, METRIC, MPH } from "../../utils/data";
import { getCardinalDirection } from "../../utils/helpers";

export function Wind({ weather: { windspeed, winddir, windgust }, units }) {
  const headerTitleStyle =
    "text-[#ffffffae] text-xs font-light mx-1 justify-start self-center";
  const windValueStyle =
    "text-white text-3xl h-8 flex justify-center items-center mr-2";
  const unitsStr = units === METRIC ? KMH : MPH;
  const windspeedRounded = Math.round(windspeed);
  const windgustRounded = Math.round(windgust);
  const windDirection = getCardinalDirection(winddir);
  const descriptionStyle = "text-white text-xs flex justify-end items-end h-8";

  return (
    <div className="h1/2 rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <WindIcon className="w-3 flex fill-[#ffffffae] justify-center" />
        <span className={headerTitleStyle}>Wind</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className={windValueStyle}>{windspeedRounded}</div>
            <div className={windValueStyle}>{windgustRounded}</div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-[#ffffffae] text-xs">{unitsStr}</span>
            <span className="text-white text-xs">Speed</span>
            <span className="text-[#ffffffae] text-xs">{unitsStr}</span>
            <span className="text-white text-xs">Gusts</span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-3xl text-white flex justify-end h-8">
            {windDirection}
          </div>
          <span className={descriptionStyle}>Direction</span>
        </div>
      </div>
    </div>
  );
}
