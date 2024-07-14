import React from 'react';
import { GetServerSideProps } from 'next';

import { getAppLayout } from '@/components/layouts';
import ProductDetail from '@/modules/product/pages/ProductDetail';
import { productService } from '@/modules/product/services/product.service';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, product } = context.params as any;
  const res = await productService.getProductDetail(`${slug}/${product}`);

  return {
    props: {
      slug: `${slug}/${product}`,
      productDetail: res,
    },
  };
};
const ProductDetailPage = ({ slug, productDetail }: any) => {
  return <ProductDetail slug={slug} initialData={productDetail} />;
};
ProductDetailPage.getLayout = getAppLayout;
export default ProductDetailPage;
