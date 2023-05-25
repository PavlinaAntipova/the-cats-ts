import { FC, MouseEvent, memo, useMemo } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { BackBtn, NextBtn, Page, StyledPagination } from './styled';

type TPaginationProps = {
  page: number;
  countItems: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: FC<TPaginationProps> = ({ page, setPage, countItems }) => {
  const isDisabledBack = useMemo(() => page <= 1, [page]);
  const isDisabledNext = useMemo(() => countItems !== 5, [countItems]);

  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (target.dataset.type === 'increment') {
      setPage(prev => prev + 1);
    }

    if (target.dataset.type === 'decrement') {
      setPage(prev => prev - 1);
    }
  };

  return (
    <StyledPagination>
      <BackBtn
        disabled={isDisabledBack}
        data-type="decrement"
        onClick={onBtnClick}
      >
        <IoIosArrowBack />
      </BackBtn>
      <Page>{page}</Page>
      <NextBtn
        disabled={isDisabledNext}
        data-type="increment"
        onClick={onBtnClick}
      >
        <IoIosArrowForward />
      </NextBtn>
    </StyledPagination>
  );
};

export default memo(Pagination);
