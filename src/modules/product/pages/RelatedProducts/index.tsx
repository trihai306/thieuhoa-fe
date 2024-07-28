import React, { useCallback } from 'react';

import ImageResize from '@/components/ImageResize';
import { formatNumber } from '@/utils/number';

import { Color, RelateItem } from '../../types';
interface RelatedProductProps {
  products: RelateItem[];
}
function RelatedProducts({ products }: RelatedProductProps) {
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
  return (
    <div className="product-watched ">
      <div className="title">
        <span>SẢN PHẨM TƯƠNG TỰ</span>
      </div>
      <div className="all-product-watched">
        <div className="group-new-product" data-item-count="{{ $relateItems->count() }}">
          {products?.map((product) => {
            return (
              <div key={product.slug} className="item-new-product">
                <div className="group-img">
                  <a href="">
                    <ImageResize
                      aspect={{ x: 2, y: 3 }}
                      src={product.extra.thumbnail}
                      alt={product.name}
                    />
                  </a>
                  <a href="" className="add-to-cart">
                    Thêm vào giỏ hàng
                  </a>
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
          })}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
