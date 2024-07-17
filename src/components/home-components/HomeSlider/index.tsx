import React, { useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { MEDIA_ENDPOINT } from '@/common/constants';

import 'swiper/css/navigation';

import 'swiper/css';
export default function HomeSlider({ items, isMobile }: any) {
  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slideNext();
  }, []);

  return (
    <div className="tw-w-full">
      <div className="tw-relative tw-w-full">
        <Swiper loop={true} ref={sliderRef} modules={[Navigation]}>
          {items?.map((item: any) => (
            <SwiperSlide key={item.id}>
              {item.url ? (
                <Link href={item.url.replace('https://thieuhoa.com.vn/', '')}>
                  <img src={isMobile ? item.image_mobile : item.image_desktop} alt="" />
                </Link>
              ) : (
                <img src={isMobile ? item.image_mobile : item.image_desktop} alt="" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="tw-absolute tw-left-0 tw-top-[calc(50%-45px/2)] tw-z-10"
          onClick={handlePrev}
        >
          <Image src={`${MEDIA_ENDPOINT}/v2/img/icon-left.png`} width={45} height={45} alt={''} />
        </button>
        <button
          className="tw-absolute tw-right-0 tw-top-[calc(50%-45px/2)] tw-z-10"
          onClick={handleNext}
        >
          <Image src={`${MEDIA_ENDPOINT}/v2/img/icon-right.png`} width={45} height={45} alt={''} />
        </button>
      </div>
    </div>
  );
}
