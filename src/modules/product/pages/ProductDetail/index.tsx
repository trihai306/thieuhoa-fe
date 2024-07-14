import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { useAddToCardMutation } from '@/services/checkout/checkout.query';
import { ApiResponse } from '@/types';

import ProductDescription from '../../components/ProductDescription';
import ProductGallery from '../../components/ProductGallery';
import ProductInfoDetail from '../../components/ProductInfoDetail';
import ProductMeta from '../../components/ProductMeta';
import { productService } from '../../services/product.service';
import type { ProductDetail } from '../../types';
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

  const categoryPost = data?.data.categoryPost;


  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <ProductMeta product={product} />
      <div id="content-product-detail">
        <div className="bread-cumbs">
          <Link className="text-base" href="/">
            Thiều Hoa
          </Link>
          »
          <Link className="text-base" href="/search">
            Sản phẩm
          </Link>
          {categoryPost && (
            <>
              »
              <a className="text-base" href={`/category/${categoryPost.slug}`}>
                {categoryPost.name}
              </a>
            </>
          )}
        </div>
        <div className="main-product-details">
          <ProductGallery images={product?.extra.list_gallery} />
          {data?.data && <ProductInfoDetail data={data?.data}></ProductInfoDetail>}
        </div>
        <ProductDescription data={data?.data} />
      </div>
    </>
  );
};

export default ProductDetail;
