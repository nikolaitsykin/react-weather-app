import { ReactComponent as UvIndexIcon } from "../../icons/uv_sun.svg";
import { uvIndexDescription } from "../../utils/helpers";

export function UvIndex({ weather: { uvindex } }) {
  const { label, description } = uvIndexDescription(uvindex);
  const uvindexRounded = Math.round(uvindex);
  const headerTitleStyle =
    "text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center";

  return (
    <div className="bg-[#50505133] rounded-lg px-2 py-1">
      <header className="h-4 flex items-center">
        <UvIndexIcon className="w-3.5 fill-[#ffffffae]" />
        <span className={headerTitleStyle}>UV Index</span>
      </header>
      <div className="h-8">
        <span className="text-3xl text-white mr-1">{uvindexRounded}</span>
        <span className="text-xl text-white">{label}</span>
      </div>
      <p className="text-xs text-white">{description}</p>
    </div>
  );
}
