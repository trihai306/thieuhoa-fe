import { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Image from '@/components/Image';

import 'swiper/css/navigation';

import 'swiper/css';

export type ProductGalleryProps = {
  images: string[];
  alt?: string;
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, alt }) => {
  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slideNext();
  }, []);

  const goToImage = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slideTo(index);
  };

  return (
    <div
      className="tw-sticky tw-flex  tw-aspect-[2/3] tw-flex-row tw-space-x-2 tw-p-2 "
      css={css`
        width: 50%;
        aspect-ratio: 2 / 3;
        overflow: hidden;
      `}
    >
      <Swiper
        direction={'vertical'}
        ref={sliderRef}
        spaceBetween={15}
        slidesPerView={5}
        className="tw-mb-auto !tw-hidden tw-h-[800px] tw-opacity-50 md:!tw-block"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => {
                goToImage(index);
              }}
              className="tw-relative tw-inline-block tw-aspect-[2/3] tw-w-[105px]"
            >
              <Image fill src={image} alt={alt || 'image'} objectFit="cover" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
        className="tw-flex-1"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="tw-relative tw-inline-block tw-aspect-[2/3] tw-w-full">
              <Image fill src={image} alt={alt || 'image'} objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
        <button
          className="tw-absolute tw-left-0 tw-top-[calc(50%-45px/2)] tw-z-10"
          onClick={handlePrev}
        >
          <Image src={`/v2/img/icon-left.png`} width={45} height={45} alt={''} />
        </button>
        <button
          className="tw-absolute tw-right-0 tw-top-[calc(50%-45px/2)] tw-z-10"
          onClick={handleNext}
        >
          <Image src={`/v2/img/icon-right.png`} width={45} height={45} alt={''} />
        </button>
      </Swiper>
    </div>
  );
};

export default ProductGallery;
