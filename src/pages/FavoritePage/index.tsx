import { FC, MouseEvent, memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import moment from 'moment';
import { nanoid } from 'nanoid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { favoriteAPI } from '@app/api';
import GalleryItemButton from '@app/components/common/GalleryItemButton';
import Loader from '@app/components/common/Loader';
import Pagination from '@app/components/common/Pagination';
import Skeleton from '@app/components/common/Skeleton';
import LogsBlock from '@app/components/extra/LogsSection';
import { LIMIT_GALLERY_ITEMS_PER_PAGE } from '@app/constants';
import { FavoritesContext } from '@app/context/favorites';
import { getElementsPerPage } from '@app/helpers/getElementsPerPage';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { BasicFeedbackBlock, ImageItem, ImagesGrid, NotFoundText } from '@app/styles/Common.styled';

const FavoritePage: FC = () => {
  const queryClient = useQueryClient();
  const [userId] = useLocalStorage<string>('user_id');
  const [page, setPage] = useState(1);
  const [id, setId] = useState<string>('');
  const [imageId, setImageId] = useState<string>('');
  const { pathname } = useLocation();

  const { favoritesResultStore, setFavoritesResultStore, logsList, setLogsList } =
    useContext(FavoritesContext);

  const {
    data: favoritesResult,
    isError: isErrorFavoritesResult,
    isLoading: isLoadingFavoritesResult,
    isFetching: isFetchingFavoritesResult,
  } = useQuery({
    queryKey: ['favoriteResult', userId],
    queryFn: () => favoriteAPI.getFavorites(userId),
    onSuccess: () => {
      setLogsList(
        favoritesResultStore.sort((a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf()),
      );
    },
  });

  const { mutate: deleteFavorite } = useMutation(favoriteAPI.deleteFavorite, {
    onSuccess: () => {
      favoritesResult &&
        setFavoritesResultStore([
          ...favoritesResultStore,
          {
            message: 'SUCCESS',
            id,
            image_id: imageId,
            created_at: moment().toDate(),
            type: 'deleted',
            key: nanoid(),
          },
        ]);
      queryClient.invalidateQueries('favoriteResult');
    },
  });

  const displayResult = useMemo(
    () => (favoritesResult ? getElementsPerPage(page, favoritesResult) : []),
    [favoritesResult, pathname, page],
  );

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget as HTMLButtonElement;
    const { id, imgid } = btn.dataset;
    id && setId(id);
    imgid && setImageId(imgid);
    id && deleteFavorite(id.toString());
  }, []);

  useEffect(() => {
    setLogsList(
      favoritesResultStore.sort((a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf()),
    );
  }, [favoritesResultStore]);

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
                {displayResult.map(item => (
                  <ImageItem key={item.id}>
                    {isFetchingFavoritesResult || isLoadingFavoritesResult ? (
                      <Skeleton />
                    ) : (
                      <GalleryItemButton
                        id={item.id}
                        imgId={item.image_id}
                        src={item.image.url}
                        handleClick={handleClick}
                        isFavorited={true}
                      />
                    )}
                  </ImageItem>
                ))}
              </ImagesGrid>
              {favoritesResult.length > LIMIT_GALLERY_ITEMS_PER_PAGE && (
                <Pagination
                  page={page}
                  setPage={setPage}
                  countItems={displayResult.length}
                />
              )}
              {!!logsList.length && (
                <LogsBlock
                  logsList={logsList}
                  isLoading={isLoadingFavoritesResult}
                  isFetching={isFetchingFavoritesResult}
                />
              )}
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
