import { useEffect, useState } from "react";
import "./App.css";
import { DailyForecast } from "./components/dailyForecast/dailyForecast";
import { Favourites } from "./components/favourites/favourites";
import { Header } from "./components/header/header";
import { HourForecast } from "./components/hourForecast/hourForecast";
import { Search } from "./components/search/search";
import { TodayForecast } from "./components/todayForecast/todayForecast";
import { WeatherCondition } from "./components/weatherCondition/weatherCondition";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { backgroundSwitch } from "./utils/helpers";
import { getFormattedWeatherDataApi, getLocation } from "./utils/weatherApi";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState("");
  const [units, setUnits] = useState("");
  const [background, setBackground] = useState(null);
  const [isFavShowed, setIsFavShowed] = useState(true);
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const [active, setActive] = useState(null);
  const [location, setLocation] = useState("");

  const addFavourite = (newFavourite) => {
    const isUnique = favourites.some(
      (item) =>
        item.city === newFavourite.city && item.country === newFavourite.country
    );
    if (!isUnique) {
      setFavourites([...favourites, newFavourite]);
    }
  };
  const removeFavourite = (favourite) => {
    setFavourites(favourites.filter((f) => f.id !== favourite.id));
  };

  useEffect(() => {
    const fetchWeather = async () => {
      let weatherData;
      if (query === "") {
        const myLocation = await getLocation();

        weatherData = await getFormattedWeatherDataApi(
          myLocation.city.name,
          units
        );
        setWeather(weatherData);
        setBackground(backgroundSwitch(weatherData));
        setLocation(myLocation.city.name);
      } else weatherData = await getFormattedWeatherDataApi(query, units);
      setWeather(weatherData);
      setBackground(backgroundSwitch(weatherData));
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className={background}>
      <div className="max-w-4xl min-h-screen mx-auto p-2 relative   ">
        <div className="h-16 mb-2 grid grid-rows-2 place-content-center md:h-8 md:flex md:justify-center lg:h-8 lg:flex lg:justify-center xl:h-8 xl:flex xl:justify-center 2xl:h-8 2xl:flex 2xl:justify-center">
          <Header
            setUnits={setUnits}
            isFavShowed={isFavShowed}
            setIsFavShowed={setIsFavShowed}
          />
        </div>
        <div className="absolute h-8 top-[42px] right-[50%] left-[50%] md:top-[9px] lg:top-[9px] xl:top-[9px] 2xl:top-[9px]">
          <Search
            query={query}
            setQuery={setQuery}
            add={addFavourite}
            favourites={favourites}
            active={active}
            setActive={setActive}
          />
        </div>
        <div>
          <Favourites
            weather={weather}
            favourites={favourites}
            location={location}
            isFavShowed={isFavShowed}
            units={units}
            remove={removeFavourite}
            setUnits={setUnits}
            setWeather={setWeather}
            setBackground={setBackground}
            active={active}
            setActive={setActive}
          />
        </div>
        {weather && (
          <div>
            <div className="my-2">
              <TodayForecast weather={weather} />
            </div>
            <div className="my-2 w-full ">
              <HourForecast items={weather.hours} weather={weather} />
            </div>
            <div className="grid grid-rows-1 my-2 gap-2 md:grid-rows-1 lg:grid-cols-2 xl:grid-cols-2">
              <div className="w-full">
                <DailyForecast items={weather.days} weather={weather} />
              </div>
              <div className="w-full">
                <WeatherCondition weather={weather} units={units} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
