import { FC } from 'react';

import { useMediaQuery } from 'react-responsive';

import { Btn, ImgBox, TextBox } from './styled';
import { TNavItemProps } from './types';

const NavItem: FC<TNavItemProps> = ({ path, text, imgInfo, bgColor }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Btn to={path}>
      {isTablet && (
        <ImgBox color={bgColor}>
          <img
            width={imgInfo.width}
            height={imgInfo.height}
            src={imgInfo.src}
            alt={text}
          />
        </ImgBox>
      )}
      <TextBox>{text}</TextBox>
    </Btn>
  );
};

export default NavItem;
