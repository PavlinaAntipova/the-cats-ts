import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;
type RemoveValue = (key: string) => void;

const useLocalStorage = <T>(key: string, initValue?: T): readonly [T, SetValue<T>, RemoveValue] => {
  const [storagedValue, setStoragedValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initValue;
    }
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initValue;
    } catch (error) {
      console.log('Error getting from storage', error);
      return initValue;
    }
  });

  const getValue = useCallback(
    (key: string) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initValue;
      } catch (error) {
        console.log('Error getting from storage', error);
        return initValue;
      }
    },
    [initValue],
  );

  const setValue: SetValue<T> = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storagedValue) : value;
      setStoragedValue(valueToStore);

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log('Error setting in storage', error);
    }
  };

  const removeValue = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log('Error removing from storage', error);
    }
  };

  useEffect(() => {
    const value = getValue(key);
    setStoragedValue(value);
  }, [key, setStoragedValue]);

  return [storagedValue, setValue, removeValue];
};

export default useLocalStorage;
