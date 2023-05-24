import { FC } from 'react';

import { useBreadCrumbs } from '@app/hooks/useBreadCrumbs';

import { StyledCurrentLocation } from './styled';

const CurrentLocation: FC = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <>
      {breadCrumbs
        .filter(item => item !== undefined)
        .map(item => (
          <StyledCurrentLocation
            key={item}
            location="/"
          >
            {item}
          </StyledCurrentLocation>
        ))}
    </>
  );
};

export default CurrentLocation;
