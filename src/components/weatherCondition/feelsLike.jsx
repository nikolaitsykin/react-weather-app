import { ReactComponent as FeelsLikeIcon } from "../../icons/temperature.svg";
import { feelsLikeDescription } from "../../utils/helpers";

export function FeelsLike({ weather: { feelslike, wind, temp, humidity } }) {
  const description = feelsLikeDescription(feelslike, wind, temp, humidity);

  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <span className="w-3 mt-[2px] fill-[#ffffffae] justify-center">
          <FeelsLikeIcon />
        </span>
        <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
          Feels like
        </span>
      </div>
      <div className="flex justify-start h-8">
        <span className="text-3xl text-white">{Math.round(feelslike)}°</span>
      </div>
      <div className="text-xs text-white flex items-end h-8">{description}</div>
    </div>
  );
}
