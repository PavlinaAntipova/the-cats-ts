import { useEffect } from 'react';

import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';

import MainLayout from '@app/components/layouts/MainLayout';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { ThemeContext } from '@app/theme';
import { darkMode, lightMode } from '@app/theme/modes';

import { StyledApp } from './styled';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('dark_theme', false);

  const [userId, setUserId] = useLocalStorage('user_id', '');

  const value = { isDarkTheme, setIsDarkTheme, userId };

  useEffect(() => {
    if (!userId) {
      const id = nanoid();
      setUserId(id);
    }
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
        <StyledApp>
          <MainLayout />
        </StyledApp>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
