import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    window.localStorage.getItem(localStorageKey) || ""
  );

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};