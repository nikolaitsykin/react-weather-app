import { ReactComponent as CalendarIcon } from "../../icons/calendar.svg";
import { Day } from "../day/day";
import { icons } from "../../utils/data";
import { useMemo } from "react";

export function DailyForecast({ weather: { timezone }, items: itemsArr }) {
  const DailyForecastStyle = `w-full h-full bg-[#50505133] rounded-lg grid grid-row p-2`;
  const HeaderStyle = `h-4 flex`;
  const IconStyle = `w-3 fill-[#ffffffae] m-1 justify-start self-center`;
  const TextStyle = `text-[#ffffffae] text-xs font-light my-1 justify-start self-center`;
  const ListStyle = `flex overflow-auto scroll-smooth justify-between items-stretch`;

  const items = useMemo(
    () =>
      itemsArr.map(({ datetimeEpoch, icon, tempmin, tempmax }) => ({
        datetimeEpoch,
        icon,
        tempmin,
        tempmax,
      })),
    [itemsArr]
  );

  return (
    <div className={DailyForecastStyle}>
      <div className={HeaderStyle}>
        <span className={IconStyle}>
          <CalendarIcon />
        </span>
        <span className={TextStyle}>Daily forecast</span>
      </div>
      <div className={ListStyle}>
        {items.map(({ datetimeEpoch, icon, tempmin, tempmax }) => (
          <Day
            timezone={timezone}
            dt={datetimeEpoch}
            icon={icons[icon]}
            min_temp={tempmin}
            max_temp={tempmax}
            key={datetimeEpoch}
          />
        ))}
      </div>
    </div>
  );
}
