import { ReactComponent as HumidityIcon } from "../../icons/humidity.svg";
import { useMemo } from "react";

export function Humidity({ weather: { humidity, dew } }) {
  const headerTitleStyle =
    "text-[#ffffffae] text-xs font-light justify-start self-center";
  const memoizedHumidity = useMemo(() => Math.round(humidity), [humidity]);
  const memoizedDew = useMemo(() => Math.round(dew), [dew]);

  return (
    <div className="rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex items-center">
        <HumidityIcon className="w-4 fill-[#ffffffae]" />
        <span className={headerTitleStyle}>Humidity</span>
      </div>
      <div className="flex justify-start h-8 items-center">
        <span className="text-3xl text-white">{memoizedHumidity}%</span>
      </div>
      <div className="text-xs text-white h-8">
        The dew point is {memoizedDew}° right now
      </div>
    </div>
  );
}
