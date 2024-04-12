import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDebounce } from "../../hooks/useDebounce";
import { ReactComponent as CancelIcon } from "../../icons/cancel.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { loadOptions } from "../../utils/weatherApi";
import classes from "./search.module.css";

export function Search({ favourites, setQuery, add, setActive }) {
  const [favourite, setFavourite] = useState({ city: "" });
  const [options, setOptions] = useState([]);
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [location, setLocation] = useState("");
  const searchValue = useDebounce(inputValue);

  const getData = async () => {
    const data = await loadOptions(searchValue);
    setOptions(data.options);
  };

  useEffect(() => {
    if (searchValue) {
      getData();
    }
  }, [searchValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setDisplay(true);
  };

  const handelLocationClick = (location) => {
    setLocation(location);
    setFavourite({ city: location.city, country: location.country });
    setQuery(location.city);
    setInputValue(location.city);
    setIsSelected(true);
    setDisplay(false);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const newFavourite = { ...favourite, id: uuidv4() };
    add(newFavourite);
    setActive(newFavourite.id);
    setFavourite({ city: "", country: "" });
    setIsSelected(false);
  };

  const handleCancelClick = (e) => {
    setInputValue("");
    setIsSelected(false);
    setDisplay(false);
    setOptions([]);
  };

  return (
    <div className="grid justify-center">
      <form className={classes.input_field}>
        <SearchIcon className={classes.search_icon} />
        {inputValue && (
          <button className={classes.cancel_button} onClick={handleCancelClick}>
            <CancelIcon className={classes.cancel_icon} />
          </button>
        )}
        <input
          className={classes.input}
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Search"
          id="input_field"
          autoComplete="off"
        />
        {display && (
          <div className={classes.dropdown}>
            {options &&
              options.map((location, index) => (
                <div
                  key={index}
                  className={classes.option}
                  onClick={() => handelLocationClick(location)}
                >
                  <span className={classes.location}>
                    {location.city}, {location.country}
                  </span>
                </div>
              ))}
          </div>
        )}
        {isSelected && (
          <button className={classes.add_button} onClick={handleAddClick}>
            <span className={classes.add_button_text}>Add</span>
          </button>
        )}
      </form>
    </div>
  );
}