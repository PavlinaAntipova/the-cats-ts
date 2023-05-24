import { FC, useContext } from 'react';

import { ReactComponent as DarkIcon } from '@app/assets/icons/dark-mode.svg';
import { ReactComponent as LightIcon } from '@app/assets/icons/light-mode.svg';
import { ThemeContext } from '@app/theme';

import { Btn, IconBox, SwitcherBox } from './styled';

const SwitcherThemeBtn: FC = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <Btn
      type="button"
      onClick={handleClick}
    >
      <IconBox>{isDarkTheme ? <LightIcon /> : <DarkIcon />}</IconBox>
      <SwitcherBox />
    </Btn>
  );
};

export default SwitcherThemeBtn;
