import React, { useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { MEDIA_ENDPOINT } from '@/common/constants';
import { formatNumber } from '@/utils/number';

export default function HomeProductSlider({ items }: any) {
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
    <div className="tw-relative tw-w-full tw-px-[5px]">
      <Swiper
        loop={true}
        ref={sliderRef}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items?.map((dataProductItem: any) => {
          return (
            <SwiperSlide key={dataProductItem.id}>
              <div key={dataProductItem.id} className="item-new-product">
                <Link href={`/${dataProductItem.cateSlug}/${dataProductItem.slug}`}>
                  <img
                    src={JSON.parse(dataProductItem.extra).thumbnail}
                    alt={dataProductItem.name}
                  />
                  <div className="text-new">{dataProductItem.name}</div>
                </Link>
                {dataProductItem.originPriceMin &&
                dataProductItem.originPriceMin > dataProductItem.priceMin ? (
                  <span className="product-grid__tags product-grid__tags--sale">
                    Sale -{dataProductItem.discount}%
                  </span>
                ) : null}
                <div className="price-product">
                  <span className="price-now">{formatNumber(dataProductItem.priceMin)}đ</span>
                  {dataProductItem.originPriceMin &&
                  dataProductItem.originPriceMin > dataProductItem.priceMin ? (
                    <span className="price-old">
                      {formatNumber(+dataProductItem.originPriceMin)}đ
                    </span>
                  ) : null}
                  {dataProductItem?.dataColor?.length && (
                    <div className="list-color">
                      <div className="color">
                        {dataProductItem.dataColor.map((dataColorItem: any) => {
                          return (
                            <div key={dataColorItem['name']} className="color-item">
                              <img
                                src={dataColorItem['thumbnail']}
                                className="color-img"
                                alt={dataColorItem['name']}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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
  );
}
