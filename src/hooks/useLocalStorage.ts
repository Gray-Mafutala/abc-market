import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: unknown) => {
  const storedItems = localStorage.getItem(key);
  const stateValue =
    storedItems === null ? defaultValue : JSON.parse(storedItems);

  const [value, setValue] = useState(stateValue);

  // each time the storedItems is updated, it will be automatically saved in the localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const clearItems = () => setValue(defaultValue);

  return [value, setValue, clearItems];
};

export default useLocalStorage;
