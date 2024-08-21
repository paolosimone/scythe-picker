import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(defaultValue);

  // read value from storage, if any
  useEffect(() => {
    const storedValue = getItem<T>(key);
    if (storedValue !== null) setValue(storedValue);
  }, [key]);

  // write value in storage on change
  useEffect(() => {
    if (!Object.is(value, defaultValue)) setItem(key, value);
  }, [key, value, defaultValue]);

  return [value, setValue];
}

function setItem<T>(key: string, item: T) {
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch {
    console.warn("Unable to access local storage");
  }
}

function getItem<T>(key: string): Nullable<T> {
  try {
    const item = localStorage.getItem(key) ?? "null";
    return JSON.parse(item);
  } catch {
    console.warn("Unable to access local storage");
    return null;
  }
}
