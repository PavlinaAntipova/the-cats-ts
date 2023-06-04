import { FC } from 'react';

import { ReactComponent as FavouriteFullIcon } from '@app/assets/icons/fav-full.svg';
import { ReactComponent as FavouriteIcon } from '@app/assets/icons/fav.svg';
import { lightMode } from '@app/theme/modes';

import { Button, Img, Wrapper } from './styled';
import { TGalleryItemButtonProps } from './types';

const GalleryItemButton: FC<TGalleryItemButtonProps> = ({ id, handleClick, src, isFavorited, imgId }) => (
  <Wrapper>
    <Button
      data-id={id}
      data-imgId={imgId}
      type="button"
      onClick={handleClick}
    >
      {isFavorited ? (
        <FavouriteFullIcon
          width="20"
          height="20"
          fill={lightMode.common.mainAccentColor}
        />
      ) : (
        <FavouriteIcon
          width="20"
          height="20"
          fill={lightMode.common.mainAccentColor}
        />
      )}
    </Button>
    <Img
      src={src}
      alt="cat"
    />
  </Wrapper>
);

export default GalleryItemButton;
