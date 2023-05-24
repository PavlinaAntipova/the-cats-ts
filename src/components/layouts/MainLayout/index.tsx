import { FC, useState } from 'react';

import { useLocation } from 'react-router-dom';

import ContentLayout from '@app/components/layouts/ContentLayout';
import Header from '@app/components/layouts/MainLayout/Header';
import Navigation from '@app/components/layouts/MainLayout/Navigation';
import TextBlock from '@app/components/layouts/MainLayout/TextBlock';

import { IntroBox, StyledLayout } from './styled';

const MainLayout: FC = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMobileMenu = () => {
    setShowMobileMenu(prevState => !prevState);
  };

  return (
    <StyledLayout location={location.pathname}>
      <IntroBox>
        <Header />
        <TextBlock />
        <Navigation />
      </IntroBox>

      <ContentLayout
        toggleMobileMenu={toggleMobileMenu}
        setSearchQuery={setSearchQuery}
      />
      {/* {showMobileMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu}/>} */}
    </StyledLayout>
  );
};

export default MainLayout;
