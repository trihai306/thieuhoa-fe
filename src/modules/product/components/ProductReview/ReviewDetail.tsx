import React from 'react';

import { Review } from '../../types';
interface ReviewDetailProps {
  review: Review;
}
function ReviewDetail({ review }: ReviewDetailProps) {
  const images: string[] = JSON.parse(review.images);
  const isRenderImage = images.length && review.resource !== 4;
  return (
    <div className="group-content">
      <div className="rate-user">
        <div className="left-rate">
          <div className="name-user">{review.user_name}</div>
          <div className="tw-flex" dangerouslySetInnerHTML={{ __html: review.htmlStar }} />
          <div className="comment">{review.content}</div>
        </div>
        {isRenderImage && (
          <div className="right-rate">
            {images.map((image) => {
              return <img className="tw-max-w-[120px]" key={image} src={image} alt="" />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewDetail;
