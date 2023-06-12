import { FC } from 'react';

import { useQuery } from 'react-query';

import breedsAPI from '@app/api/breeds';
import { ReactComponent as DecSortIcon } from '@app/assets/icons/revert.svg';
import { ReactComponent as AscSortIcon } from '@app/assets/icons/sort.svg';
import { Btn, SelectsBox } from '@app/pages/BreedsPage/styled';

import BreedSelect from './components/BreedSelect';
import LimitSelect from './components/LimitSelect';
import { TFilterProps } from './types';

const Filter: FC<TFilterProps> = ({ limit, breed, handleClick, handleSelect, isDisabled }) => {
  const { data: breeds } = useQuery({
    queryKey: ['breeds'],
    queryFn: () => breedsAPI.getBreeds({ limit: '', order: '', page: 1 }),
  });

  return (
    <SelectsBox>
      <BreedSelect
        breed={breed}
        options={breeds ? breeds : []}
        handleSelect={handleSelect}
      />
      <LimitSelect
        limit={limit}
        handleSelect={handleSelect}
      />
      <Btn
        type="button"
        name="DESC"
        disabled={isDisabled}
        onClick={handleClick}
      >
        <AscSortIcon />
      </Btn>
      <Btn
        type="button"
        name="ASC"
        disabled={isDisabled}
        onClick={handleClick}
      >
        <DecSortIcon />
      </Btn>
    </SelectsBox>
  );
};

export default Filter;
