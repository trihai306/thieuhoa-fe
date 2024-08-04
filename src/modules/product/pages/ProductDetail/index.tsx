import React, { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import Meta from '@/components/Meta';
import { ApiResponse } from '@/types';
import { productWatched } from '@/utils/product-watched';

import ProductDescription from '../../components/ProductDescription';
import ProductGallery from '../../components/ProductGallery';
import ProductInfoDetail from '../../components/ProductInfoDetail';
import ProductReview from '../../components/ProductReview';
import { productService } from '../../services/product.service';
import type { ProductDetail } from '../../types';
import ProductWatched from '../ProductWatched';
import RelatedProducts from '../RelatedProducts';

export type ProductDetailProps = {
  slug: string;
  initialData?: ApiResponse<ProductDetail>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ slug, initialData }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['product', slug],
    initialData: initialData as ApiResponse<ProductDetail>,
    queryFn: async () => {
      return await productService.getProductDetail(slug);
    },
  });
  const product = data?.data.product;
  useEffect(() => {
    productWatched.push(product.id);
  }, [product]);
  const categoryPost = data?.data.categoryPost;
  const metaData = useMemo(() => {
    return initialData?.data.metaData;
  }, [initialData?.data.metaData]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Meta {...metaData} />
      <div id="content-product-detail">
        <div className="bread-cumbs">
          <Link className="text-base" href="/">
            Thiều Hoa
          </Link>
          <span className="tw-mx-3">»</span>
          <Link className="text-base" href="/search">
            Sản phẩm
          </Link>
          {categoryPost && (
            <>
              <span className="tw-mx-3">»</span>
              <Link className="text-base" href={`/category/${categoryPost.slug}`}>
                {categoryPost.name}
              </Link>
            </>
          )}
        </div>
        <div className="main-product-details">
          <ProductGallery images={product?.extra.list_gallery} />
          {data?.data && <ProductInfoDetail data={data?.data}></ProductInfoDetail>}
        </div>
        <ProductDescription data={data?.data} />
        <ProductReview product={product} />
        <RelatedProducts products={data.data.relateItems} />
        <ProductWatched />
      </div>
    </>
  );
};

export default ProductDetail;
