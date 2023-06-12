import { Dispatch, FC, SetStateAction } from 'react';

import { useQuery } from 'react-query';

import { votingAPI } from '@app/api';
import { TFavoritesResult } from '@app/api/types/vote';
import Skeleton from '@app/components/common/Skeleton';
import { ImgSectionWrapper } from '@app/pages/VotingPage/styled';
import { ImgBox } from '@app/styles/Common.styled';

import Controls from './components/Controls';

type TRandomCatSectionProps = {
  favoritesResultStore: TFavoritesResult[];
  setFavoritesResultStore: Dispatch<SetStateAction<TFavoritesResult[]>>;
};

const RandomCatSection: FC<TRandomCatSectionProps> = ({ favoritesResultStore, setFavoritesResultStore }) => {
  const {
    data: cat,
    isLoading: isLoadingCat,
    isFetching: isFetchingCat,
    isError: isErrorCat,
  } = useQuery('votingCat', votingAPI.getRandomCat);

  return (
    <ImgSectionWrapper>
      <ImgBox>
        {isErrorCat ? (
          <p>Opps, a cat is missing :(</p>
        ) : (
          <>
            {cat && (
              <>
                {isLoadingCat ||
                isLoadingCat === undefined ||
                isFetchingCat ||
                isFetchingCat === undefined ? (
                  <Skeleton />
                ) : (
                  <img
                    src={cat.url}
                    alt="random-cat"
                  />
                )}
              </>
            )}
          </>
        )}
      </ImgBox>
      <Controls
        imageId={cat ? cat.id : ''}
        favoritesResultStore={favoritesResultStore}
        setFavoritesResultStore={setFavoritesResultStore}
      />
    </ImgSectionWrapper>
  );
};

export default RandomCatSection;
