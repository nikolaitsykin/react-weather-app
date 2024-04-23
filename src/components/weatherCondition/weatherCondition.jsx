import { FeelsLike } from "./feelsLike";
import { Humidity } from "./humidity";
import { Pressure } from "./pressure";
import { SunPhase } from "./sunPhase";
import { UvIndex } from "./uvIndex";
import { Wind } from "./wind";

export function WeatherCondition({ weather, units }) {
  const conditionComponents = [
    Wind,
    SunPhase,
    FeelsLike,
    Humidity,
    Pressure,
    UvIndex,
  ];
  return (
    <div className="grid gap-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
      {conditionComponents.map((Component, index) => (
        <Component key={index} weather={weather} units={units} />
      ))}
    </div>
  );
}
