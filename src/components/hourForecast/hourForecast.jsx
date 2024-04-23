import { icons } from "../../utils/data";
import { Hour } from "../hour/hour";

export function HourForecast({ weather: { timezone, description }, items }) {
  const forecastStyle = "w-full bg-[#50505133] rounded-lg grid p-2";
  const descriptionStyle = "text-[#ffffff] text-xs font-light my-1 justify-start self-center mx-1";
  const flexStyle = "flex overflow-auto scroll-smooth justify-between";
  
  const renderItem = item => (
    <Hour 
      timezone={timezone}
      dt={item.datetimeEpoch}
      temperature={item.temp}
      icon={icons[item.icon]}
      key={item.datetimeEpoch}
    />
  );

  return (
    <div className={forecastStyle}>
      <div className="h-4 flex">
        <span className={descriptionStyle}>{description}</span>
      </div>
      <div className={flexStyle}>
        {items?.map(renderItem)}
      </div>
    </div>
  );
}
