import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import NoSSR from 'react-no-ssr';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MEDIA_ENDPOINT } from '@/common/constants';
import Paginate from '@/components/Paginate';
import { ApiResponse } from '@/types/common';
import { formatNumber } from '@/utils/number';

import ProductFilter from '../../components/ProductFilter';
import ProductLoadingCard from '../../components/ProductLoadingCard';
import { productService } from '../../services/product.service';
import { ProductCategory } from '../../types';
export type ProductSearchProps = {
  keyword: string;
  initialData?: ApiResponse<ProductCategory>;
};

const ProductSearch: React.FC<ProductSearchProps> = ({ keyword, initialData }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState({
    keyword: keyword,
    page: 1,
  });
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['search', searchQuery],
    // initialData: initialData,
    queryFn: async () => {
      return await productService.search(searchQuery);
    },
  });

  const haveLoading = isLoading || isFetching;

  useEffect(() => {
    router.push(
      {
        pathname: '/search',
        query: { keyword: keyword, page: page },
      },
      undefined,
      { shallow: true },
    );
  }, [page]);

  const category = data?.data?.category;
  const products = data?.data?.products?.data;

  return (
    <div id="content-product" className="tw-pb-10">
      <div className="top-content">
        <div className="bread-cumbs">
          <Link className="text-base" href="/">
            Thiều Hoa
          </Link>{' '}
          <span className="tw-mx-3">»</span>
          <Link className="text-base" href="/search">
            Tìm kiếm
          </Link>
        </div>

        <div className="dropdown-filter"></div>
      </div>
      <div className="main-content">
        <ProductFilter
          from={data?.data.products.from ?? 0}
          to={data?.data.products.to ?? 0}
          total={data?.data.products.total ?? 0}
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
                      <img
                        className="img-product lozad"
                        src={product.extra['thumbnail']}
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
                    {product.extra['data_color'].length > 0 && (
                      <div className="list-color">
                        <div className="color">
                          {product.extra['data_color'].map((dataColorItem) => (
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

          <NoSSR>
            <Paginate
              isMobile={isMobile}
              value={searchQuery.page}
              onChange={(p) => {
                setSearchQuery({ ...searchQuery, page: p });
              }}
              total={data?.data?.products?.total ?? 0}
              perPage={data?.data?.products?.per_page ?? 1}
            />
          </NoSSR>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
