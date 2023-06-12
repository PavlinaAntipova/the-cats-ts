import { ChangeEvent, FC } from 'react';

import { Select } from '@app/pages/BreedsPage/styled';

type TLimitSelectProps = {
  limit: string;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const LimitSelect: FC<TLimitSelectProps> = ({ limit, handleSelect }) => {
  const options: string[] = ['5', '10', '15', '20'];

  return (
    <Select
      name="limit"
      value={limit}
      onChange={handleSelect}
    >
      <option value="">Limit</option>
      {options.map(option => (
        <option
          key={option}
          value={option}
        >
          Limit: {option}
        </option>
      ))}
    </Select>
  );
};

export default LimitSelect;
