import { FC } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import ActionNavigation from './ActionNavigation';
import BackBtn from './BackBtn';
import CurrentLocation from './CurrentLocation';
import { ContentBox, LocationBox, MainContent } from './styled';
import { TContentLayoutProps } from './types';

const ContentLayout: FC<TContentLayoutProps> = ({ setSearchQuery, toggleMobileMenu }) => {
  const location = useLocation();

  return (
    <MainContent>
      {location?.pathname !== '/' && (
        <ActionNavigation
          toggleMobileMenu={toggleMobileMenu}
          setSearchQuery={setSearchQuery}
        />
      )}
      <ContentBox location={location.pathname}>
        {location?.pathname !== '/' && (
          <LocationBox>
            <BackBtn />
            <CurrentLocation />
          </LocationBox>
        )}

        <Outlet />
      </ContentBox>
    </MainContent>
  );
};

export default ContentLayout;
