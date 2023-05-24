import { createContext } from 'react';

import { IThemeContext } from './types';

export const ThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  setIsDarkTheme: () => undefined,
  userId: '',
});
