export function TodayForecast({
  weather: { address, temp, temp_min, temp_max, conditions },
}) {
  // console.log(address)
  return (
    <div className="flex flex-col h-56 items-center justify-center text-white ">
      <div className="text-3xl font-light">{address}</div>
      <div className="text-6xl font-thin">{Math.round(temp)}°</div>
      <div className="font-normal">{conditions}</div>
      <div className="flex">
        <p className="font-normal mx-1">H:{Math.round(temp_max)}°</p>
        <p className="font-normal mx-1">L:{Math.round(temp_min)}°</p>
      </div>
    </div>
  );
}