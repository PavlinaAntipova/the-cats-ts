import { FC, memo, useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { favoriteAPI } from '@app/api';
import Loader from '@app/components/common/Loader';
import Pagination from '@app/components/common/Pagination';
import Skeleton from '@app/components/common/Skeleton';
import LogsBlock from '@app/components/extra/LogsSection';
import { LIMIT_GALLERY_ITEMS_PER_PAGE } from '@app/constants';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { BasicFeedbackBlock, ImageItem, ImagesGrid, NotFoundText } from '@app/styles/Common.styled';

const FavoritePage: FC = () => {
  const [userId] = useLocalStorage<string>('user_id');
  const [page, setPage] = useState(1);

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
      {!favoritesResult && isLoadingFavoritesResult ? (
        <Loader size={'100px'} />
      ) : (
        <>
          {favoritesResult && !!favoritesResult.length ? (
            <>
              <ImagesGrid>
                {favoritesResult.map(item => (
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
              {favoritesResult.length > LIMIT_GALLERY_ITEMS_PER_PAGE && (
                <Pagination
                  page={page}
                  setPage={setPage}
                  countItems={favoritesResult.length}
                />
              )}
              <LogsBlock logsList={[]} />
            </>
          ) : (
            <BasicFeedbackBlock>
              <NotFoundText>There is no cats here</NotFoundText>
            </BasicFeedbackBlock>
          )}
        </>
      )}
    </>
  );
};

export default memo(FavoritePage);
