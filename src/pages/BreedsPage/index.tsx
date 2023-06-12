import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import { useQuery, useQueryClient } from 'react-query';
import { Outlet, useLocation } from 'react-router-dom';

import breedsAPI from '@app/api/breeds';

import BreedsSection from './sections/BreedsSection';
import Filter from './sections/Filter';

const BreedsPage: FC = () => {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState('');
  const [breed, setBreed] = useState('');
  const [order, setOrder] = useState('');

  const {
    data: breeds,
    isError: isErrorBreeds,
    isLoading: isLoadingBreeds,
    isFetching: isFetchingBreeds,
  } = useQuery({
    queryKey: ['breeds', { limit, order, page }],
    queryFn: () => breedsAPI.getBreeds({ limit, order, page }),
    enabled: !breed,
  });

  const {
    data: breedInfo,
    isError: isErrorBreedInfo,
    isLoading: isLoadingBreedInfo,
    isFetching: isFetchingBreedInfo,
  } = useQuery({
    queryKey: ['breedInfo', { breed, limit }],
    queryFn: () => breedsAPI.getBreedById({ id: breed, limit }),
    enabled: !!breed,
  });

  const handleSort = (e: MouseEvent<HTMLButtonElement>) => {
    setOrder(e.currentTarget.name);
    setPage(1);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.name === 'limit') {
      setLimit(e.currentTarget.value);
      setPage(1);
      return;
    }
    setBreed(e.currentTarget.value);
    setPage(1);
  };

  return (
    <section>
      {pathname === '/breeds' ? (
        <>
          <Filter
            handleClick={handleSort}
            handleSelect={handleSelect}
            limit={limit}
            breed={breed}
            isDisabled={!!breed}
          />
          {!!breed ? (
            <BreedsSection
              data={breedInfo}
              isLoading={isLoadingBreedInfo}
              isFetching={isFetchingBreedInfo}
              limit={limit}
            />
          ) : (
            <BreedsSection
              data={breeds}
              isLoading={isLoadingBreeds}
              isFetching={isFetchingBreeds}
              pagination={{
                page,
                limit,
                setPage,
                countItems: breeds ? breeds.length : 0,
              }}
            />
          )}
        </>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default BreedsPage;
