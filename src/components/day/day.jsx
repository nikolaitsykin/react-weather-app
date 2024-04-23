import { formatDate, formatDayOfWeek, isToday } from "../../utils/helpers";

export function Day({ timezone, dt, icon, min_temp, max_temp }) {
  const isTodayText = isToday(dt, timezone) ? "Today" : formatDayOfWeek(dt, timezone);
  const dateText = formatDate(dt, timezone);
  const roundedMaxTemp = Math.round(max_temp);
  const roundedMinTemp = Math.round(min_temp);

  return (
    <div className="w-12  flex flex-col justify-between items-stretch mb-1">
      <div className=" text-white text-md flex justify-center" data-is-today={isTodayText}>{isTodayText}</div>
      <div className="text-white text-xs flex justify-center" data-date={dateText}>{dateText}</div>
      <div>{icon}</div>
      <div className="text-white text-sm flex justify-center" data-max-temp={roundedMaxTemp}>{roundedMaxTemp}°</div>
      <div className="text-[#ffffffbc] text-sm flex justify-center" data-min-temp={roundedMinTemp}>{roundedMinTemp}°</div>
    </div>
  );
}
