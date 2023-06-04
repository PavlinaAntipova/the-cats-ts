import { FC, useContext, useEffect } from 'react';

import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { votingAPI } from '@app/api';
import { FavoritesContext } from '@app/context/favorites';
import { makeLogHistory } from '@app/helpers/makeLogHistory';
import useLocalStorage from '@app/hooks/useLocalStorage';

import LogsBlock from '../../components/extra/LogsSection';
import RandomCatSection from './sections/RandomCatSection';

const VotingPage: FC = () => {
  const [userId] = useLocalStorage<string>('user_id');

  const { favoritesResultStore, setFavoritesResultStore, logsList, setLogsList } =
    useContext(FavoritesContext);

  const {
    data: votingResult,
    isError: isErrorVotingResult,
    isLoading: isLoadingVotingResult,
    isFetching: isFetchingVotingResult,
  } = useQuery({
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
    setLogsList(
      makeLogHistory({
        voting: votingResult ? votingResult : [],
        favorites: favoritesResultStore,
      }),
    );
  }, [favoritesResultStore]);

  useEffect(() => {
    isErrorVotingResult && toast('Opps, while loading voting results the error happened. Please try again.');
  }, [isErrorVotingResult]);

  return (
    <>
      <RandomCatSection
        favoritesResultStore={favoritesResultStore}
        setFavoritesResultStore={setFavoritesResultStore}
      />
      <LogsBlock
        logsList={logsList}
        isLoading={isLoadingVotingResult}
        isFetching={isFetchingVotingResult}
      />
    </>
  );
};

export default VotingPage;
