import { ReactComponent as HumidityIcon } from "../../icons/humidity.svg";

export function Humidity({ weather: { humidity, dew } }) {
  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <span className="w-3.5 flex fill-[#ffffffae] justify-center">
          <HumidityIcon />
        </span>
        <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
          Humidity
        </span>
      </div>
      <div className="flex justify-start h-8">
        <span className="text-3xl text-white">{Math.round(humidity)}%</span>
      </div>
      <div className="text-xs text-white flex items-end h-8">
        The dew point is {Math.round(dew)}° right now
      </div>
    </div>
  );
}