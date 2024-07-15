import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { ProductDetail } from '../types';

export type ProductDescriptionProps = {
  data: ProductDetail;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ data }) => {
  return (
    <div className="detail-description">
      <div className="title">Mô tả chi tiết</div>{' '}
      <div className="content">
        <ReactMarkdown
          className={'text blog-description'}
          rehypePlugins={[rehypeRaw, remarkGfm]}
          components={{
            img: (props) => {
              return (
                <img
                  src={props['data-src'] ?? props['src']}
                  width={675}
                  height={450}
                  className="wscnph"
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
              );
            },
          }}
        >
          {data.product?.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProductDescription;
