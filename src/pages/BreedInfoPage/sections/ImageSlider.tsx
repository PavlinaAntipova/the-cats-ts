import { FC } from 'react';

import { A11y, Keyboard, Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from '@app/components/common/Skeleton';
import { ImgBox } from '@app/styles/Common.styled';

type TImage = {
  url: string;
  id: string;
};

type TImageSliderProps = {
  images: TImage[];
  name: string;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
};

const ImageSlider: FC<TImageSliderProps> = ({ images, name, isLoading, isFetching, isError }) => (
  <Swiper
    slidesPerView={1}
    modules={[Pagination, A11y, Mousewheel, Keyboard]}
    pagination={{ clickable: true }}
    mousewheel={true}
    keyboard={true}
    loop={true}
  >
    <ImgBox>
      {isError ? (
        <p>Opps, a cat is missing :(</p>
      ) : (
        <>
          {!!images?.length && (
            <>
              {isLoading || isLoading === undefined || isFetching || isFetching === undefined ? (
                <Skeleton />
              ) : (
                images.map(item => (
                  <SwiperSlide key={item.id}>
                    <ImgBox>
                      <img
                        src={item.url}
                        alt={name}
                      />
                    </ImgBox>
                  </SwiperSlide>
                ))
              )}
            </>
          )}
        </>
      )}
    </ImgBox>
  </Swiper>
);

export default ImageSlider;
