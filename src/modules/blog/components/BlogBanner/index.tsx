import { useCallback, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Image from '@/components/Image';

import 'swiper/css/navigation';

import 'swiper/css';

const banners = [
  {
    href: 'https://thieuhoa.com.vn/vay-dam-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily',
    src: '/v2/img/banner-small/banner-small-1.jpg',
    alt: '',
  },
  {
    href: 'https://thieuhoa.com.vn/ao-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily',
    src: '/v2/img/banner-small/banner-small-2.jpg',
    alt: '',
  },
  {
    href: 'https://thieuhoa.com.vn/dam-du-tiec?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily',
    src: '/v2/img/banner-small/banner-small-5.jpg',
    alt: '',
  },
  {
    href: 'https://thieuhoa.com.vn/tui-xach-nu?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily',
    src: '/v2/img/banner-small/banner-small-4.jpg',
    alt: '',
  },
  {
    href: 'https://thieuhoa.com.vn/giay-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily',
    src: '/v2/img/banner-small/banner-small-3.jpg',
    alt: '',
  },
];

const BlogBanner = () => {
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
    <div className="banner tw-h-[300px]">
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="tw-relative tw-inline-block tw-h-full tw-w-full">
              <Image fill src={banner.src} alt={banner.alt} />
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

export default BlogBanner;
