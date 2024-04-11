import { ReactComponent as PressureIcon } from "../../icons/dashboard.svg";
import { INCH, METRIC, MM } from "../../utils/data";
import { pressureDescription } from "../../utils/helpers";

export function Pressure({ weather: { pressure, pressureInInches }, units }) {
  const description = pressureDescription(pressure);
  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
        <div className="h-4 flex">
          <span className="w-2.5 flex fill-[#ffffffae] justify-center">
            <PressureIcon />
          </span>
          <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
            Pressure
          </span>
        </div>
        <div className="flex flex-col justify-start h-8">
          <div>
            <span className="text-3xl text-white">
              {units === METRIC ? pressure : pressureInInches}
            </span>
            <span className="text-xl text-white">
              {units === METRIC ? MM : INCH}
            </span>
          </div>
        </div>
        <div className="text-xs text-white flex items-end h-8">
          {description}
        </div>
    </div>
  );
}