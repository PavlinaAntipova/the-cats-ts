import { FC } from 'react';

import { useMediaQuery } from 'react-responsive';

import homeImg from '@app/assets/images/home-page/homeImg.png';

import { Img } from './styled';

const HomePage: FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <>
      {isDesktop && (
        <Img
          src={homeImg}
          alt="Girl and pet"
        />
      )}
    </>
  );
};

export default HomePage;
