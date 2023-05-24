import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Logo from '@app/components/layouts/MainLayout/Logo';
import SwitcherThemeBtn from '@app/components/layouts/MainLayout/SwitcherThemeBtn';

import { StyledHeader } from './styled';

const Header: FC = () => {
  const location = useLocation();

  return (
    <StyledHeader location={location.pathname}>
      <Link to="/">
        <Logo />
      </Link>
      <SwitcherThemeBtn />
    </StyledHeader>
  );
};

export default Header;
