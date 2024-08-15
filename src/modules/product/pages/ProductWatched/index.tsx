import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { MEDIA_ENDPOINT } from '@/common/constants';
import ImageResize from '@/components/ImageResize';
import { formatNumber } from '@/utils/number';
import { productWatched } from '@/utils/product-watched';

import { productService } from '../../services/product.service';
import { Color, Product, RelateItem } from '../../types';

function ProductWatched() {
  const [productIds, setProductIds] = useState<number[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ['productWatched', productIds],
    queryFn: async () => {
      return await productService.getProducts(productIds);
    },
    enabled: !!productIds.length,
  });
  const products = useMemo(() => {
    const productSort = data?.data ?? [];
    let sorted: Product[] = [];
    productIds.forEach((id) => {
      const product = productSort.find((item) => item.id === id);
      if (product) {
        sorted = [...sorted, product];
      }
    });
    return sorted;
  }, [data?.data, productIds]);
  useEffect(() => {
    const ids = productWatched.getAll();
    setProductIds(ids);
  }, []);
  const renderColors = useCallback((colors: Color[]) => {
    if (!colors?.length) return null;
    return (
      <div className="list-color">
        <div className="color">
          {colors.map((color) => {
            return (
              <div key={color.color} className="color-item">
                <div className="tw-h-5 tw-w-5">
                  <ImageResize
                    aspect={{ x: 1, y: 1 }}
                    src={color.thumbnail}
                    className="color-img"
                    alt={color.color}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }, []);

  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper?.slideNext();
  }, []);
  const renderSliderItem = useCallback(
    (product: RelateItem) => {
      return (
        <div key={product.slug} className="item-new-product">
          <div className="group-img">
            <Link href={`/${product.full_path}`}>
              <ImageResize
                aspect={{ x: 2, y: 3 }}
                src={JSON.parse(product.extra).thumbnail}
                alt={product.name}
              />
            </Link>
            <Link href={`/${product.full_path}`} className="add-to-cart">
              Thêm vào giỏ hàng
            </Link>
          </div>
          <div className="text-new">{product.name}</div>
          <div className="price-product">
            <span className="price-now">{formatNumber(product.priceMin)}đ</span>
            {product.originPriceMin > product.priceMin && (
              <span className="price-old">{formatNumber(product.originPriceMin)}đ</span>
            )}
            {renderColors(product.colors)}
          </div>
        </div>
      );
    },
    [renderColors],
  );
  if (!products.length) return null;
  return (
    <div className="product-watched ">
      <div className="title">
        <span>SẢN PHẨM ĐÃ XEM</span>
      </div>
      <div className="tw-w-full">
        <div className="tw-relative tw-w-full">
          <Swiper
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>{renderSliderItem(product)}</SwiperSlide>
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
            <Image
              src={`${MEDIA_ENDPOINT}/v2/img/icon-right.png`}
              width={45}
              height={45}
              alt={''}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductWatched;
