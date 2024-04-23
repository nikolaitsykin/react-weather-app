import FavoriteItem from "../favouriteItem/favouriteItem";

export function Favourites({
  favourites,
  location,
  units,
  weather,
  isFavShowed,
  remove,
  setWeather,
  setBackground,
  active,
  setActive,
}) {
  if (!isFavShowed) return null;
  return (
    <div className="flex flex-row items-center justify-start gap-2 xxs:grid xxs:grid-cols-2 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row">
      {weather && (
        <FavoriteItem
          weather={weather}
          location={location}
          city={location}
          setActive={setActive}
          active={active}
          selectOnClick={() => setActive(1)}
          isActive={active === 1}
          units={units}
          key={1}
          setWeather={setWeather}
          setBackground={setBackground}
          remove={remove}
        />
      )}
      {favourites?.map((favourite) => (
        <FavoriteItem
          favourite={favourite}
          location={location}
          city={favourite.city}
          units={units}
          key={favourite.id}
          selectOnClick={() => setActive(favourite.id)}
          isActive={active === favourite.id}
          setActive={setActive}
          active={active}
          remove={remove}
          setWeather={setWeather}
          setBackground={setBackground}
        />
      ))}
    </div>
  );
}
