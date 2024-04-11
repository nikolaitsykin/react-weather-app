import { ReactComponent as CalendarIcon } from "../../icons/calendar.svg";
import { Day } from "../day/day";

import { icons } from "../../utils/data";

export function DailyForecast({ weather: { timezone }, items }) {
  return (
    <div className="w-full h-full bg-[#50505133] rounded-lg grid grid-row p-2">
      <div className="h-4 flex">
        <span className="w-3 fill-[#ffffffae] m-1 justify-start self-center">
          <CalendarIcon />
        </span>
        <span className="text-[#ffffffae] text-xs font-ligth my-1 justify-start self-center">
          Daily forecast
        </span>
      </div>
      <div className="flex overflow-auto scroll-smooth justify-between items-stretch">
        {items.map((item) => (
          <Day
            timezone={timezone}
            dt={item.datetimeEpoch}
            icon={icons[item.icon]}
            min_temp={item.tempmin}
            max_temp={item.tempmax}
            key={item.datetimeEpoch}
          />
        ))}
      </div>
    </div>
  );
}