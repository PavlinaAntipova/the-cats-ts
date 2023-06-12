import { FC } from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import breedsAPI from '@app/api/breeds';

import ImageSlider from './sections/ImageSlider';
import InfoBlock from './sections/InfoBlock';

const BreedInfoPage: FC = () => {
  const { id = '' } = useParams();

  const {
    data: breedInfo,
    isError: isErrorBreedInfo,
    isLoading: isLoadingBreedInfo,
    isFetching: isFetchingBreedInfo,
  } = useQuery({
    queryKey: ['breedInfo', { id }],
    queryFn: () => breedsAPI.getBreedById({ id, limit: '5' }),
  });

  console.log(breedInfo ? breedInfo[0].breeds[0].name : '');

  return (
    <section>
      <ImageSlider
        name={breedInfo ? breedInfo[0].breeds[0].name : ''}
        images={breedInfo ? breedInfo : []}
        isFetching={isFetchingBreedInfo}
        isLoading={isLoadingBreedInfo}
        isError={isErrorBreedInfo}
      />
      <InfoBlock
        breed={breedInfo && breedInfo[0].breeds[0]}
        isFetching={isFetchingBreedInfo}
        isLoading={isLoadingBreedInfo}
      />
    </section>
  );
};

export default BreedInfoPage;
