import { FC, useContext } from 'react';

import { ReactComponent as LogoDark } from '@app/assets/icons/logo-dark.svg';
import { ReactComponent as LogoLight } from '@app/assets/icons/logo-light.svg';
import { ThemeContext } from '@app/theme';

const Logo: FC = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <>{isDarkTheme ? <LogoDark /> : <LogoLight />}</>;
};

export default Logo;
