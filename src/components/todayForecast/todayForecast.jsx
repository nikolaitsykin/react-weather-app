export function TodayForecast({ weather }) {
  const { address, temp, temp_min, temp_max, conditions } = weather;
  const roundedTemp = Math.round(temp);
  const roundedMaxTemp = Math.round(temp_max);
  const roundedMinTemp = Math.round(temp_min);
  const forecastContainerStyle = "flex flex-col h-56 items-center justify-center text-white"

  return (
    <div className={forecastContainerStyle}>
      <div className="text-3xl font-light">{address}</div>
      <div className="text-6xl font-thin">{roundedTemp}°</div>
      <div className="font-normal">{conditions}</div>
      <div className="flex">
        <p className="font-normal mx-1">H:{roundedMaxTemp}°</p>
        <p className="font-normal mx-1">L:{roundedMinTemp}°</p>
      </div>
    </div>
  );
}
