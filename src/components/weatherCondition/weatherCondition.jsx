import { FeelsLike } from "./feelsLike";
import { Humidity } from "./humidity";
import { Pressure } from "./pressure";
import { SunPhase } from "./sunPhase";
import { UvIndex } from "./uvIndex";
import { Wind } from "./wind";

export function WeatherCondition({ weather, units }) {
  return (
    <div className="grid gap-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
      <Wind weather={weather} units={units} />
      <SunPhase weather={weather} />
      <FeelsLike weather={weather} units={units} />
      <Humidity weather={weather} units={units} />
      <Pressure weather={weather} units={units} />
      <UvIndex weather={weather} units={units} />
    </div>
  );
}