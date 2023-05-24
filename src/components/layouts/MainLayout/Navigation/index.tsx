import { FC } from 'react';

import NavItem from './NavItem';
import { navigationItems } from './helpers';
import { Item, StyledNavigation } from './styled';

const Navigation: FC = () => (
  <StyledNavigation>
    {navigationItems.map(({ path, text, imgInfo, bgColor }) => (
      <Item key={text}>
        <NavItem
          path={path}
          text={text}
          imgInfo={imgInfo}
          bgColor={bgColor}
        />
      </Item>
    ))}
  </StyledNavigation>
);

export default Navigation;
