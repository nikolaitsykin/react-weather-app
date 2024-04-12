import { ReactComponent as WindIcon } from "../../icons/wind-2.svg";
import { KMH, METRIC, MPH } from "../../utils/data";
import { getCardinalDirection } from "../../utils/helpers";

export function Wind({ weather: { windspeed, winddir, windgust }, units }) {
  return (
    <div className="h1/2 rounded-lg bg-[#50505133] px-2 py-1">
      <div className="h-4 flex">
        <span className="w-3 flex fill-[#ffffffae] justify-center">
          <WindIcon />
        </span>
        <span className="text-[#ffffffae] text-xs font-ligth mx-1 justify-start self-center">
          Wind
        </span>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row">
          <div className=" flex flex-col">
            <div className="text-white text-3xl h-8 flex justify-center items-center mr-2 ">
              {Math.round(windspeed)}
            </div>
            <div className="text-white text-3xl h-8 flex justify-center items-center mr-2 ">
              {Math.round(windgust)}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-white text-xs flex">
                {units === METRIC ? KMH : MPH}
              </span>
              <span className="text-white text-xs">Gusts</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xs">
                {units === METRIC ? KMH : MPH}
              </span>
              <span className="text-white text-xs">Wind</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between	">
          <div className="text-3xl text-white flex justify-end h-8">
            {getCardinalDirection(winddir)}
          </div>
          <div className="text-white text-xs flex justify-end items-end h-8">
            Direction
          </div>
        </div>
      </div>
    </div>
  );
}
