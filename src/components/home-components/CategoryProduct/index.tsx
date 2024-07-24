import React from 'react';
import Link from 'next/link';

import { useCategoryDataQuery } from '@/services/home/home.query';

import HomeProductSlider from '../HomeProductSlider';

function CategoryProduct() {
  const { data, isLoading } = useCategoryDataQuery();
  return data?.map((categoryItem) => {
    return (
      <div key={categoryItem.id} className="new-products">
        <div className="title">
          <Link className="text-base" href={`/${categoryItem.slug}`}>
            <h2>{categoryItem.name}</h2>
          </Link>
        </div>
        <HomeProductSlider items={categoryItem.dataProduct} />
        <div className="load-more tw-mt-[20px]">
          <div className="btn-load-more">
            <Link className="xem_them tw-flex tw-items-center" href={`/${categoryItem.slug}`}>
              <span>XEM THÊM</span>
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.546 8.04801C10.6348 7.98685 10.7075 7.90501 10.7576 7.80955C10.8078 7.71409 10.834 7.60786 10.834 7.50001C10.834 7.39216 10.8078 7.28593 10.7576 7.19047C10.7075 7.09501 10.6348 7.01317 10.546 6.95201L1.87934 0.952011C1.77938 0.882561 1.6623 0.841834 1.54081 0.834255C1.41933 0.826675 1.29809 0.852533 1.19027 0.90902C1.08245 0.965507 0.992175 1.05046 0.929248 1.15465C0.866322 1.25885 0.833152 1.37829 0.833344 1.50001L0.833344 13.5C0.833846 13.6214 0.867442 13.7405 0.93052 13.8442C0.993597 13.948 1.08377 14.0326 1.19134 14.089C1.29891 14.1453 1.41981 14.1713 1.54103 14.1641C1.66226 14.1569 1.77922 14.1167 1.87934 14.048L10.546 8.04801Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

export default CategoryProduct;
