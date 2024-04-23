import { formatAmPm, formatHour, isNow } from "../../utils/helpers";

export function Hour({ dt, timezone, temperature, icon }) {
  const isNowValue = isNow(dt, timezone);
  const formattedHour = isNowValue ? "" : formatHour(dt, timezone);
  const formattedAmPm = isNowValue ? "" : formatAmPm(dt, timezone);
  const roundedTemp = Math.round(temperature);

  return (
    <div className="w-12 flex flex-col items-center justify-around">
      <div className="text-white">
        <span className="text-sm">{isNowValue ? "Now" : formattedHour}</span>
        <span className="text-xs">{formattedAmPm}</span>
      </div>
      <span className="h-12 pb-1">{icon}</span>
      <span className="text-sm text-white">{roundedTemp}°</span>
    </div>
  );
}
