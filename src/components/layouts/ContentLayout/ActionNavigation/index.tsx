import { FC } from 'react';

import { useMediaQuery } from 'react-responsive';

import MobileMenuIcon from '@app/assets/icons/mobile-menu.svg';
import ActionNavItem from '@app/components/layouts/ContentLayout/ActionNavigation/ActionNavItem';
import SearchBar from '@app/components/layouts/ContentLayout/ActionNavigation/SeachBar';

import { actionMenuList } from './helper';
import { List, MenuBtn, StyledActionNavigation } from './styled';
import { TActionNavigationProps } from './types';

const ActionNavigation: FC<TActionNavigationProps> = ({ toggleMobileMenu, setSearchQuery }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <StyledActionNavigation>
      {isTabletOrMobile && (
        <MenuBtn
          type="button"
          onClick={() => {
            toggleMobileMenu();
          }}
        >
          <MobileMenuIcon />
        </MenuBtn>
      )}

      <SearchBar setSearchQuery={setSearchQuery} />

      <List>
        {actionMenuList.map(item => (
          <ActionNavItem
            key={item.path}
            path={item.path}
          >
            {item.icon}
          </ActionNavItem>
        ))}
      </List>
    </StyledActionNavigation>
  );
};

export default ActionNavigation;
