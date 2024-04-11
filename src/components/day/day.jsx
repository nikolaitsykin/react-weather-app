import { formatDate, formatDayOfWeek, isToday } from "../../utils/helpers";

export function Day({ timezone, dt, icon, min_temp, max_temp }) {
  return (
    <div className="w-12  flex flex-col justify-between items-stretch mb-1">
      <div className=" text-white text-md flex justify-center">
        {isToday(dt, timezone) ? "Today" : formatDayOfWeek(dt, timezone)}
      </div>
      <div className="text-white text-xs flex justify-center">
        {formatDate(dt, timezone)}
      </div>
      <div>{icon}</div>
      <div className="text-white text-sm flex justify-center">
        {Math.round(max_temp)}°
      </div>
      <div className="text-[#ffffffbc] text-sm flex justify-center">
        {Math.round(min_temp)}°
      </div>
    </div>
  );
}