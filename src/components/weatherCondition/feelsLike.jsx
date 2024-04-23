import { ReactComponent as FeelsLikeIcon } from "../../icons/temperature.svg";
import { feelsLikeDescription } from "../../utils/helpers";
import { useMemo } from "react";

export function FeelsLike({ weather: { feelslike, wind, temp, humidity } }) {
  const { description, feelsLikeRounded } = useMemo(() => {
    const feelsLikeRounded = Math.round(feelslike);
    const description = feelsLikeDescription(feelslike, wind, temp, humidity);
    return { feelsLikeRounded, description };
  }, [feelslike, wind, temp, humidity]);

  const feelsLikeIconStyle = "w-3 mt-[2px] fill-[#ffffffae] justify-center";
  const headerTitleStyle = "text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center";
  
  return (
    <div className="rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <FeelsLikeIcon className={feelsLikeIconStyle} />
        <span className={headerTitleStyle}>
          Feels like
        </span>
      </div>
      <div className="flex justify-start h-8">
        <span className="text-3xl text-white">{feelsLikeRounded}°</span>
      </div>
      <div className="text-xs text-white flex items-end h-8">{description}</div>
    </div>
  );
}
