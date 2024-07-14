import React from 'react';
import Head from 'next/head';

import { Product } from '../types';
export type ProductProps = {
  product: Product;
};

const ProductMeta: React.FC<ProductProps> = ({ product }) => {
  return (
    <Head>
      <span itemScope itemType="http://schema.org/Product" className="microdata">
        <meta itemProp="image" content={product?.extra.thumbnail} />
        <meta itemProp="name" content={product?.name} />
        <meta itemProp="description" content="Meta Description" />
        <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <meta itemProp="price" content={product?.priceMin} />
          <meta itemProp="priceCurrency" content="VND" />
        </span>
      </span>
    </Head>
  );
};

export default ProductMeta;
