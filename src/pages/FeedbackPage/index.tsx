import { FC, memo, useEffect, useMemo, useState } from 'react';

import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { votingAPI } from '@app/api';
import Loader from '@app/components/common/Loader';
import Pagination from '@app/components/common/Pagination';
import Skeleton from '@app/components/common/Skeleton';
import { LIMIT_GALLERY_ITEMS_PER_PAGE } from '@app/constants';
import { getElementsPerPage } from '@app/helpers/getElementsPerPage';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { BasicFeedbackBlock, ImageItem, ImagesGrid, NotFoundText } from '@app/styles/Common.styled';

import { filterDataByPage } from './helpers';

const FeedbackPage: FC = () => {
  const { pathname } = useLocation();
  const [userId] = useLocalStorage<string>('user_id');
  const [page, setPage] = useState(1);

  const {
    data: votingResult,
    isError: isErrorVotingResult,
    isLoading: isLoadingvotingResult,
    isFetching: isFetchingVotingResult,
  } = useQuery({
    queryKey: ['votingResult', userId],
    queryFn: () => votingAPI.getVotings(userId),
  });

  const currentTypeOfFeedbackResult = useMemo(
    () => (votingResult ? filterDataByPage(votingResult, pathname) : []),
    [votingResult, pathname],
  );

  const displayResult = useMemo(
    () => (votingResult ? getElementsPerPage(page, currentTypeOfFeedbackResult) : []),
    [votingResult, pathname, page],
  );

  useEffect(() => {
    isErrorVotingResult && toast('Something went wrong. Please try again.');
  }, [isErrorVotingResult]);

  return (
    <>
      {!votingResult && isLoadingvotingResult ? (
        <Loader size={'100px'} />
      ) : (
        <>
          {votingResult && !!votingResult.length ? (
            <>
              <ImagesGrid>
                {displayResult.map(item => (
                  <ImageItem key={item.id}>
                    {isFetchingVotingResult || isLoadingvotingResult ? (
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
              {currentTypeOfFeedbackResult.length > LIMIT_GALLERY_ITEMS_PER_PAGE && (
                <Pagination
                  page={page}
                  setPage={setPage}
                  countItems={displayResult.length}
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

export default memo(FeedbackPage);
