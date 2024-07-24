import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import NoSSR from 'react-no-ssr';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';
import Paginate from '@/components/Paginate';
import ReadMore from '@/components/ReadMore';
import { ApiResponse } from '@/types';
import { formatNumber } from '@/utils/number';

import ProductLoadingCard from '../../components/ProductLoadingCard';
import { productService } from '../../services/product.service';
import { ProductCategory as ProductCategoryType } from '../../types';
export type ProductCategoryProps = {
  slug: string;
  initialData?: ApiResponse<ProductCategoryType>;
  page?: number;
};

const ProductCategory: React.FC<ProductCategoryProps> = ({ slug, initialData, page }) => {
  const [searchQuery, setSearchQuery] = useState({
    slug: slug,
    page: page ?? 1,
  });

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [slug, searchQuery],
    // initialData: initialData,
    queryFn: async () => {
      return await productService.getCategory(searchQuery);
    },
  });

  const haveLoading = isLoading || (isFetching && searchQuery.page !== 1);

  const category = data?.data?.category;
  const parentCategory = data?.data?.parentCategory;
  const childrenCategory = data?.data?.childrenCategory;
  const products = data?.data?.products?.data;

  useEffect(() => {
    setSearchQuery((prev) => ({ slug: slug, page: 1 }));
  }, [slug, page]);

  return (
    <NoSSR>
      <div id="content-product">
        <div className="top-content">
          <div className="bread-cumbs">
            <Link className="text-base" href="/">
              Thiều Hoa
            </Link>{' '}
            <span className="tw-mx-3">»</span>
            <Link className="text-base" href="/search">
              Sản phẩm
            </Link>
            {category && (
              <>
                <span className="tw-mx-3">»</span>
                <Link className="text-base" href={`/${category?.slug}`}>
                  {category?.name}
                </Link>
              </>
            )}
          </div>
          <h1 className="title">
            <span>{category?.name}</span>
          </h1>
          <div className="gr-filter">
            <div className="option-filter">
              {!parentCategory ? (
                <Link className="text-base" href={`/${category?.slug}`}>
                  <div className="item-filter active">
                    <span>Tất cả {category?.name}</span>
                  </div>
                </Link>
              ) : (
                <Link className="text-base" href={`/${parentCategory?.slug}`}>
                  <div className="item-filter">
                    <span>Tất cả {parentCategory?.name}</span>
                  </div>
                </Link>
              )}
              {childrenCategory?.map((child) => (
                <Link className="text-base" href={`/${child.slug}`} key={child.slug}>
                  <div className={`item-filter ${child.slug === category?.slug ? 'active' : ''}`}>
                    <span>{child.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="dropdown-filter"></div>
        </div>
        <div className="main-content">
          <div className="right-product">
            <div className="group-list-product">
              {haveLoading &&
                Array(20)
                  .fill(0)
                  .map((_, index) => <ProductLoadingCard key={index} />)}
              {!haveLoading &&
                products?.map((product) => (
                  <div className="item-list-product" key={product.slug}>
                    <div className="group-img">
                      <Link href={`/${product.cateSlug}/${product.slug}`}>
                        <img
                          className="img-product lozad"
                          src={JSON.parse(product.extra)['thumbnail']}
                          alt={product.name}
                        />
                      </Link>
                      {category?.slug === 'san-pham-moi' && (
                        <div className="new-product-img">Mới</div>
                      )}
                      {category?.slug === 'best-seller' && (
                        <div className="selling tw-my-2">
                          <img src={`${MEDIA_ENDPOINT}/v2/img/svg/hot-sale.svg`} alt="" />
                          <span className="text-selling">Bán chạy</span>
                        </div>
                      )}
                      {!!product.discount && (
                        <div className="product-grid__tags product-grid__tags--sale">
                          Sale -{product.discount}%
                        </div>
                      )}
                    </div>
                    <h2 className="name-product">
                      <Link className="text-base" href={`/${product.slug}/${product.cateSlug}`}>
                        {product.name}
                      </Link>
                    </h2>
                    <div className="price-product">
                      <span className="price-now">{formatNumber(product.priceMin)}đ</span>
                      {product.originPriceMin && product.originPriceMin > product.priceMin && (
                        <span className="price-old">{formatNumber(product.originPriceMin)}đ</span>
                      )}
                      {JSON.parse(product.extra)['data_color'].length > 0 && (
                        <div className="list-color">
                          <div className="color">
                            {JSON.parse(product.extra)['data_color'].map((dataColorItem) => (
                              <div className="color-item" key={dataColorItem.name}>
                                <img
                                  src={dataColorItem.thumbnail}
                                  className="color-img"
                                  height="20"
                                  width="20"
                                  alt={dataColorItem.name}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            {!haveLoading && (
              <Paginate
                isMobile={isMobile}
                value={searchQuery.page}
                onChange={(p) => {
                  setSearchQuery({ ...searchQuery, page: p });
                }}
                total={data?.data?.products?.total ?? 0}
                perPage={data?.data?.products?.per_page ?? 1}
              />
            )}
            <div className="description-product">
              <div className="group-description">
                <div className="cate_description_sub">
                  <ReadMore>{category?.description ?? ''}</ReadMore>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default ProductCategory;
