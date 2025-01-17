import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import NoSSR from 'react-no-ssr';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Url } from 'url';

import { MEDIA_ENDPOINT } from '@/common/constants';
import ImageResize from '@/components/ImageResize';
import Paginate from '@/components/Paginate';
import ReadMore from '@/components/ReadMore';
import { ApiResponse, SearchQueryType } from '@/types';
import { formatNumber } from '@/utils/number';

import ProductFilter from '../../components/ProductFilter';
import ProductLoadingCard from '../../components/ProductLoadingCard';
import { productService } from '../../services/product.service';
import { ProductCategory as ProductCategoryType } from '../../types';
export type ProductCategoryProps = {
  slug: string;
  initialData?: ApiResponse<ProductCategoryType>;
  page?: number;
};
const ProductCategory: React.FC<ProductCategoryProps> = ({ slug, initialData, page }) => {
  const [searchQuery, setSearchQuery] = useState<SearchQueryType>({
    page: page ?? 1,
  });
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [slug, searchQuery],
    // initialData: initialData,
    queryFn: async () => {
      return await productService.getCategory(slug, searchQuery);
    },
  });

  const haveLoading = isLoading || (isFetching && searchQuery.page !== 1);
  const router = useRouter();
  const category = data?.data?.category;
  const parentCategory = data?.data?.parentCategory;
  const childrenCategory = data?.data?.childrenCategory;
  const products = data?.data?.products?.data;
  const pageRef = useRef<HTMLDivElement>(null);
  const handleChangePage = useCallback(
    (pageActive: number) => {
      setSearchQuery({ ...searchQuery, page: pageActive });
      pageRef.current?.scrollIntoView({ behavior: 'smooth' });
      const query = {
        ...router.query,
        page: pageActive,
      };
      router.push({ query });
    },
    [router, searchQuery],
  );
  useEffect(() => {
    setSearchQuery({ ...router.query });
  }, []);
  const handleApplyFilter = useCallback(
    (searchQuery: SearchQueryType) => {
      router.push({
        query: {
          ...router.query,
          ...searchQuery,
        },
      });
    },
    [router],
  );
  return (
    <NoSSR>
      <div id="content-product" ref={pageRef}>
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
          <ProductFilter
            from={initialData?.data.products?.from ?? 0}
            to={initialData?.data.products?.to ?? 0}
            total={initialData?.data.products?.total ?? 0}
            onSearch={handleApplyFilter}
          />
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
                        <ImageResize
                          aspect={{
                            x: 2,
                            y: 3,
                          }}
                          className="img-product"
                          src={JSON.parse(`${product.extra}`)?.['thumbnail'] || ''}
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
                    {JSON.parse(`${product.extra}`)?.['data_color'].length > 0 && (
                      <div className="list-color">
                        {JSON.parse(`${product.extra}`)?.['data_color'].map(
                          (dataColorItem: any) => (
                            <div className="color-item" key={dataColorItem.name}>
                              <div className="tw-h-5 tw-w-5">
                                {dataColorItem.thumbnail && (
                                  <ImageResize
                                    aspect={{
                                      x: 1,
                                      y: 1,
                                    }}
                                    src={dataColorItem.thumbnail}
                                    className="color-img"
                                    alt={dataColorItem.name}
                                  />
                                )}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    )}
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
                    </div>
                  </div>
                ))}
            </div>
            {!haveLoading && (
              <Paginate
                isMobile={isMobile}
                value={searchQuery.page ?? 1}
                onChange={handleChangePage}
                total={data?.data?.products?.total ?? 0}
                perPage={data?.data?.products?.per_page ?? 1}
              />
            )}
            <div style={{ clear: 'both' }}></div>
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
