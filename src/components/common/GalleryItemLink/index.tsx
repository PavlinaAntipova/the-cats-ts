import { FC } from 'react';

import { Img, StyledLink, Text } from './styled';
import { TGalleryItemLinkProps } from './types';

const GalleryItemLink: FC<TGalleryItemLinkProps> = ({ url, name, id }) => (
  <StyledLink to={`/breeds/${id}`}>
    {url ? (
      <Img
        src={url}
        alt={name}
      />
    ) : null}
    <Text>{name}</Text>
  </StyledLink>
);

export default GalleryItemLink;
