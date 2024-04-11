import { ReactComponent as UvIndexIcon } from "../../icons/uv_sun.svg";
import { uvIndexDescription } from "../../utils/helpers";

export function UvIndex({ weather: { uvindex } }) {
  const { label, description } = uvIndexDescription(uvindex);

  return (
    <div className=" rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <span className="w-3 flex fill-[#ffffffae] justify-center">
          <UvIndexIcon />
        </span>
        <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
          UV Index
        </span>
      </div>
      <div className="flex flex-col justify-start h-8">
        <div>
          <span className="text-3xl text-white mr-1">{Math.round(uvindex)}</span>
          <span className="text-xl text-white">{label}</span>
        </div>
      </div>
      <div className="text-xs text-white flex items-end h-8">{description}</div>
    </div>
  );
}