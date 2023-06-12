import { ChangeEvent, FC } from 'react';

import { TBreed } from '@app/api/types/breed';
import { StyledBreedSelect } from '@app/pages/BreedsPage/styled';

type TBreedSelectProps = {
  options: TBreed[];
  breed: string;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const BreedSelect: FC<TBreedSelectProps> = ({ breed, options, handleSelect }) => {
  return (
    <StyledBreedSelect
      onChange={handleSelect}
      value={breed}
    >
      <option value="">All breeds</option>
      {options.map(breed => (
        <option
          key={breed.id}
          value={breed.id}
        >
          {breed.name}
        </option>
      ))}
    </StyledBreedSelect>
  );
};

export default BreedSelect;
