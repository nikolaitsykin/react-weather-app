import { ReactComponent as PressureIcon } from "../../icons/dashboard.svg";
import { INCH, METRIC, MM } from "../../utils/data";
import { pressureDescription } from "../../utils/helpers";

export function Pressure({ weather: { pressure, pressureInInches }, units }) {
  function pressureInUnits(pressure, units, pressureInInches) {
    return units === METRIC ? pressure : pressureInInches;
  }
  function unitDisplay(units) {
    return units === METRIC ? MM : INCH;
  }
  const description = pressureDescription(pressure);
  const headerTitleStyle =
    "text-[#ffffffae] text-xs font-light mx-1 justify-start self-center";
  const iconStyle = "w-2.5 flex fill-[#ffffffae] justify-center";

  return (
    <div className={`rounded-lg bg-[#50505133] px-2 py-1`}>
      <div className="h-4 flex items-center">
        <PressureIcon className={iconStyle} />
        <span className={headerTitleStyle}>Pressure</span>
      </div>
      <div className="flex flex-col justify-start h-8">
        <div>
          <span className="text-3xl text-white">
            {pressureInUnits(pressure, units, pressureInInches)}
          </span>
          <span className="text-xl text-white">{unitDisplay(units)}</span>
        </div>
      </div>
      <div className="text-xs text-white flex items-end h-8">{description}</div>
    </div>
  );
}
