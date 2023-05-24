import { FC, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '@app/assets/icons/search.svg';

import { Input, SearchForm, StyledBtn } from './styled';
import { TSeachBarProps } from './types';

const SearchBar: FC<TSeachBarProps> = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        setSearchQuery(inputValue.trim());

        if (location !== '/search') {
          navigate('/search');
        }
        setInputValue('');
      }}
    >
      <Input
        type="text"
        placeholder="Search for breeds by name"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        pattern="[a-zA-Z]+"
      />
      <StyledBtn type="submit">
        <SearchIcon
          width="20"
          height="20"
        />
      </StyledBtn>
    </SearchForm>
  );
};

export default SearchBar;
