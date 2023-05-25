import { FC, useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { votingAPI } from '@app/api';
import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import useLocalStorage from '@app/hooks/useLocalStorage';

import { makeLogHistory } from './helpers';
import LogsBlock from './sections/LogsSection';
import RandomCatSection from './sections/RandomCatSection';

const VotingPage: FC = () => {
  const [userId] = useLocalStorage<string>('user_id');
  const [favoritesResultStore, setFavoritesResultStore] = useLocalStorage<TFavoritesResult[]>(
    'favorite_cats',
    [],
  );
  const [logsList, setLogsList] = useState<(TVoteInfo | TFavoritesResult)[]>([]);

  const { data: votingResult, isError: isErrorVotingResult } = useQuery({
    queryKey: ['votingResult', userId],
    queryFn: () => votingAPI.getVotings(userId),
    onSuccess: data => {
      setLogsList(
        makeLogHistory({
          voting: data ? data : [],
          favorites: favoritesResultStore,
        }),
      );
    },
  });

  useEffect(() => {
    isErrorVotingResult && toast('Opps, while loading voting results the error happened. Please try again.');
    setLogsList(
      makeLogHistory({
        voting: votingResult ? votingResult : [],
        favorites: favoritesResultStore,
      }),
    );
  }, [favoritesResultStore]);

  return (
    <>
      <RandomCatSection
        favoritesResultStore={favoritesResultStore}
        setFavoritesResultStore={setFavoritesResultStore}
      />
      <LogsBlock logsList={logsList} />
    </>
  );
};

export default VotingPage;
