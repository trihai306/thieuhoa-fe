import React from 'react';
import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';
interface BlockProps {
  blocks: any;
}
export default function Block({ blocks }: BlockProps) {
  return blocks?.map((block: any) => {
    return (
      <div key={block.id} className="block-product">
        <div className="new-products">
          <div className="group-new-product">
            {block.products?.map((product: any) => {
              return (
                <div key={product.id} className="item-new-product">
                  <Link href={product.url} rel="nofollow">
                    <img src={`${MEDIA_ENDPOINT}/images/image-thumb.svg`} alt={product.name} />
                    <div className="text-new">{product.name}</div>
                  </Link>
                  <div className="price-product">
                    <span className="price-now">{product.price}đ</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
}
