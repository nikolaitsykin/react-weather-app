import { isNow, formatHour, formatAmPm } from "../../utils/helpers";

export function Hour({ dt, timezone, temperature, icon }) {
  return (
    <div className="w-12 flex flex-col justify-around my-2">
      <div className="text-center">
        <span className="text-white text-sm">
          {isNow(dt, timezone) ? "Now" : formatHour(dt, timezone)}
        </span>
        <span className="text-white text-xs">
          {isNow(dt, timezone) ? "" : formatAmPm(dt, timezone)}
        </span>
      </div>
      <div>{icon}</div>
      <div className="text-white text-sm flex justify-center">
        {Math.round(temperature)}°
      </div>
    </div>
  );
}