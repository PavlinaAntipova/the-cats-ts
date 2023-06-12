import { FC } from 'react';

import { TBreed, TBreedById } from '@app/api/types/breed';
import GalleryItemLink from '@app/components/common/GalleryItemLink';
import Loader from '@app/components/common/Loader';
import Pagination from '@app/components/common/Pagination';
import Skeleton from '@app/components/common/Skeleton';
import { BasicFeedbackBlock, ImageItem, ImagesGrid, NotFoundText } from '@app/styles/Common.styled';

import { TBreedsSectionProps } from './types';

const BreedsSection: FC<TBreedsSectionProps> = ({ data, isLoading, isFetching, pagination, limit }) => {
  const isBreed = (item: TBreed | TBreedById): item is TBreed => (item as TBreed).name !== undefined;

  return (
    <>
      {!data && isLoading ? (
        <Loader size={'100px'} />
      ) : (
        <>
          {data && !!data.length ? (
            <>
              <ImagesGrid>
                {data.map(item => (
                  <ImageItem key={item.id}>
                    {isFetching || isLoading ? (
                      <Skeleton />
                    ) : (
                      <GalleryItemLink
                        url={isBreed(item) ? item.image?.url : item?.url}
                        name={isBreed(item) ? item.name : item.breeds[0]?.name}
                        id={isBreed(item) ? item.id : item.breeds[0].id}
                      />
                    )}
                  </ImageItem>
                ))}
              </ImagesGrid>
              {!!pagination
                ? !!pagination.limit && (
                    <Pagination
                      page={pagination.page}
                      setPage={pagination.setPage}
                      countItems={data.length}
                      limit={pagination.limit}
                    />
                  )
                : null}
              {!!limit && data.length < +limit
                ? `There is no more cats :( We have only ${data.length}.`
                : null}
            </>
          ) : (
            <BasicFeedbackBlock>
              <NotFoundText>There is no cats here</NotFoundText>
            </BasicFeedbackBlock>
          )}
        </>
      )}
    </>
  );
};

export default BreedsSection;
