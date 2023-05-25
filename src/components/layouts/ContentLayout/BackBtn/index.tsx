import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as BackIcon } from '@app/assets/icons/back.svg';

import { StyledBackBtn } from './styled';

const BackBtn: FC = () => {
  const navigate = useNavigate();
  const history = window.history;

  const handleClick = () => {
    if (history.length <= 2) {
      navigate('/');
      return;
    }
    navigate(-1);
  };

  return (
    <StyledBackBtn
      onClick={handleClick}
      type="button"
    >
      <BackIcon />
    </StyledBackBtn>
  );
};

export default BackBtn;
