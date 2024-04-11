import { icons } from "../../utils/data";
import { Hour } from "../hour/hour";

export function HourForecast({ weather: { timezone, description }, items }) {
  return (
    <div className="w-full bg-[#50505133] rounded-lg grid p-2">
      <div className="h-4 flex">
        <span className="text-[#ffffff] text-xs font-ligth my-1 justify-start self-center mx-1">
          {description}</span>
      </div>
      <div className="flex overflow-auto scroll-smooth justify-between">
        {items &&
          items.map((item) => (
            <Hour
              timezone={timezone}
              dt={item.datetimeEpoch}
              temperature={item.temp}
              icon={icons[item.icon]}
              key={item.datetimeEpoch}
            />
          ))}
      </div>
    </div>
  );
}