import { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Image from '@/components/Image';

import 'swiper/css/navigation';

import 'swiper/css';

export type ProductGalleryProps = {
  images: string[];
  alt?: string;
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, alt }) => {
  const sliderHorizontalRef = useRef<SwiperRef>(null);
  const sliderVerticalRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = useCallback(() => {
    if (!sliderHorizontalRef.current) return;
    sliderHorizontalRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderHorizontalRef.current) return;
    sliderHorizontalRef.current?.swiper?.slideNext();
  }, []);

  const goToImage = (index: number) => {
    if (!sliderHorizontalRef.current || !sliderVerticalRef.current) return;
    sliderHorizontalRef.current?.swiper?.slideTo(index);
    sliderVerticalRef.current?.swiper?.slideTo(index);
    setActiveIndex(index);
  };
  return (
    <div className="left-product-detail sticky-image-l">
      <div className="container  sticky-image">
        <div className="all-show">
          <div className="tw-relative">
            <Swiper ref={sliderHorizontalRef} slidesPerView={1} loop>
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="tw-relative tw-inline-block tw-aspect-[2/3] tw-w-full">
                    <Image fill src={image} alt={alt || 'image'} objectFit="cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
          </div>
        </div>
        <div className="small-img">
          <div className="small-container">
            <Swiper
              direction={'vertical'}
              ref={sliderVerticalRef}
              spaceBetween={15}
              className="tw-mb-auto !tw-hidden tw-h-[800px] md:!tw-block"
              slidesPerView={5}
              // centeredSlides={true}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => {
                      goToImage(index);
                    }}
                    className={`tw-relative tw-inline-block tw-aspect-[2/3] tw-w-[105px] ${
                      activeIndex !== index && 'tw-opacity-50'
                    }`}
                  >
                    <Image fill src={image} alt={alt ?? 'image'} objectFit="cover" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
