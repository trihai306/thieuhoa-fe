import React, { useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { MEDIA_ENDPOINT } from '@/common/constants';
import ImageResize from '@/components/ImageResize';
import { useBannerQuery } from '@/services/home/home.query';

import 'swiper/css/navigation';

import 'swiper/css';

export default function HomeSlider({ isMobile }: { isMobile?: boolean }) {
  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slideNext();
  }, []);
  const { data, isLoading } = useBannerQuery();
  const renderSliderItem = useCallback(
    (item: any) => {
      const ratio = {
        width: isMobile ? 1168 : 2048,
        height: isMobile ? 2241 : 768,
      };
      if (item.url) {
        return (
          <Link href={item.url.replace('https://thieuhoa.com.vn/', '')}>
            <ImageResize
              ratio={ratio}
              className="tw-w-full"
              src={isMobile ? item.image_mobile : item.image_desktop}
              unoptimized
            />
          </Link>
        );
      }
      return (
        <ImageResize
          ratio={ratio}
          className="tw-w-full"
          src={isMobile ? item.image_mobile : item.image_desktop}
          unoptimized
        />
      );
    },
    [isMobile],
  );
  return (
    <div className="tw-w-full">
      <div className="tw-relative tw-w-full">
        <Swiper loop={true} ref={sliderRef} modules={[Navigation]}>
          {data?.map((item: any) => (
            <SwiperSlide key={item.id}>{renderSliderItem(item)}</SwiperSlide>
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
