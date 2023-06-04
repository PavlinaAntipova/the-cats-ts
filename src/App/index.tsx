import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import MainLayout from '@app/components/layouts/MainLayout';
import { FavoritesContext } from '@app/context/favorites';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { ThemeContext } from '@app/theme';
import { darkMode, lightMode } from '@app/theme/modes';

import { StyledApp } from './styled';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('dark_theme', false);
  const [userId, setUserId] = useLocalStorage('user_id', '');

  const [favoritesResultStore, setFavoritesResultStore] = useLocalStorage<TFavoritesResult[]>(
    'favorite_cats',
    [],
  );
  const [logsList, setLogsList] = useState<(TVoteInfo | TFavoritesResult)[]>([]);

  useEffect(() => {
    if (!userId) {
      const id = nanoid();
      setUserId(id);
    }
  }, []);

  const themeValue = { isDarkTheme, setIsDarkTheme, userId };
  const favoritesValue = { favoritesResultStore, setFavoritesResultStore, logsList, setLogsList };

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
        <FavoritesContext.Provider value={favoritesValue}>
          <StyledApp>
            <MainLayout />
          </StyledApp>
        </FavoritesContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
