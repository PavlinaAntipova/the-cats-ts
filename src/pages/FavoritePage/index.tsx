import { FC, memo, useEffect } from 'react';

import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { favoriteAPI } from '@app/api';
import Loader from '@app/components/common/Loader';
import Skeleton from '@app/components/common/Skeleton';
import LogsBlock from '@app/components/extra/LogsSection';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { ImageItem, ImagesGrid } from '@app/styles/Common.styled';

const FavoritePage: FC = () => {
  const [userId] = useLocalStorage<string>('user_id');

  const {
    data: favoritesResult,
    isError: isErrorFavoritesResult,
    isLoading: isLoadingFavoritesResult,
    isFetching: isFetchingFavoritesResult,
  } = useQuery({
    queryKey: ['votingResult', userId],
    queryFn: () => favoriteAPI.getFavorites(userId),
  });

  useEffect(() => {
    isErrorFavoritesResult && toast('Something went wrong. Please try again.');
  }, [isErrorFavoritesResult]);

  return (
    <>
      <> {!favoritesResult && isLoadingFavoritesResult && <Loader size={'100px'} />}</>

      <ImagesGrid>
        {favoritesResult &&
          favoritesResult.map(item => (
            <ImageItem key={item.id}>
              {isFetchingFavoritesResult || isLoadingFavoritesResult ? (
                <Skeleton />
              ) : (
                <img
                  src={item.image.url}
                  alt="cat"
                />
              )}
            </ImageItem>
          ))}
      </ImagesGrid>
      <LogsBlock logsList={[]} />
    </>
  );
};

export default memo(FavoritePage);
