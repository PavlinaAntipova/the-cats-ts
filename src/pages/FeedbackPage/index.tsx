import { FC, useEffect } from 'react';

import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { votingAPI } from '@app/api';
import Loader from '@app/components/common/Loader';
import Skeleton from '@app/components/common/Skeleton';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { ImageItem, ImagesGrid } from '@app/styles/Common.styled';

import { filterDataByPage } from './helpers';

const FeedbackPage: FC = () => {
  const { pathname } = useLocation();
  const [userId] = useLocalStorage<string>('user_id');

  const {
    data: votingResult,
    isError: isErrorVotingResult,
    isLoading: isLoadingvotingResult,
    isFetching: isFetchingVotingResult,
  } = useQuery({
    queryKey: ['votingResult', userId],
    queryFn: () => votingAPI.getVotings(userId),
  });

  useEffect(() => {
    toast('Something went wrong. Please try again.');
  }, [isErrorVotingResult]);

  return (
    <>
      <> {!votingResult && isLoadingvotingResult && <Loader size={'100px'} />}</>

      <ImagesGrid>
        {votingResult &&
          filterDataByPage(votingResult, pathname).map(item => (
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
    </>
  );
};

export default FeedbackPage;
