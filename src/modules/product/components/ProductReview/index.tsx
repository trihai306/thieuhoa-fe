import React, { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';

import { productService } from '../../services/product.service';
import { Product, ReviewResponse } from '../../types';

import ReviewDetail from './ReviewDetail';

interface ProductReviewProps {
  product: Product;
}
const STAR_STATUS = ['Rất tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Rất hài lòng'];
function ProductReview({ product }: ProductReviewProps) {
  const [query, setQuery] = useState({
    page: 1,
    product_id: product.id,
    limit: 6,
    type: 1,
  });
  const [rateComment, setRateComment] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [rateStar, setRateStar] = useState<number>(5);
  const { data, isLoading } = useQuery<ReviewResponse>({
    queryKey: ['Product Review'],
    // initialData: initialData,
    queryFn: async () => {
      const res = await productService.getReview(query);
      return res.data;
    },
  });
  const handleTogglePopup = () => {
    setShowPopup((prev) => !prev);
  };
  const reviews = data?.reviews;
  if (!reviews) return null;
  return (
    <>
      <div className="product-review">
        <div className="top-product-review">
          <div className="title">ĐÁNH GIÁ SẢN PHẨM</div>
          <div className="content-top">
            <div className="average-rating">
              <div className="title-average">
                <span>Đánh giá trung bình</span>
                <p>({reviews.total} đánh giá)</p>
              </div>
              <div className="number-average tw-flex tw-items-center tw-justify-center tw-gap-x-3">
                {product.numberStar}/5
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9998 2.66675L20.1198 11.0134L29.3332 12.3601L22.6665 18.8534L24.2398 28.0267L15.9998 23.6934L7.75984 28.0267L9.33317 18.8534L2.6665 12.3601L11.8798 11.0134L15.9998 2.66675Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="details-rating">
              <div className="item-details">
                <p>5</p>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 1.08337L8.67391 4.47421L12.4168 5.02129L9.7085 7.65921L10.3477 11.3859L7.00016 9.62546L3.65266 11.3859L4.29183 7.65921L1.5835 5.02129L5.32641 4.47421L7.00016 1.08337Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="progess">
                  <div className="progess-bar width-100"></div>
                </div>
                <span>Rất hài lòng</span>
              </div>
              <div className="item-details">
                <p>4</p>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 1.08337L8.67391 4.47421L12.4168 5.02129L9.7085 7.65921L10.3477 11.3859L7.00016 9.62546L3.65266 11.3859L4.29183 7.65921L1.5835 5.02129L5.32641 4.47421L7.00016 1.08337Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="progess">
                  <div className="progess-bar width-0"></div>
                </div>
                <span>Hài lòng</span>
              </div>
              <div className="item-details">
                <p>3</p>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 1.08337L8.67391 4.47421L12.4168 5.02129L9.7085 7.65921L10.3477 11.3859L7.00016 9.62546L3.65266 11.3859L4.29183 7.65921L1.5835 5.02129L5.32641 4.47421L7.00016 1.08337Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="progess">
                  <div className="progess-bar width-0"></div>
                </div>
                <span>Bình thường</span>
              </div>
              <div className="item-details">
                <p>2</p>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 1.08337L8.67391 4.47421L12.4168 5.02129L9.7085 7.65921L10.3477 11.3859L7.00016 9.62546L3.65266 11.3859L4.29183 7.65921L1.5835 5.02129L5.32641 4.47421L7.00016 1.08337Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="progess">
                  <div className="progess-bar width-0"></div>
                </div>
                <span>Không hài lòng</span>
              </div>
              <div className="item-details">
                <p>1</p>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 1.08337L8.67391 4.47421L12.4168 5.02129L9.7085 7.65921L10.3477 11.3859L7.00016 9.62546L3.65266 11.3859L4.29183 7.65921L1.5835 5.02129L5.32641 4.47421L7.00016 1.08337Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="progess">
                  <div className="progess-bar width-0"></div>
                </div>
                <span>Rất tệ</span>
              </div>
            </div>
            <div className="rate-now">
              <div className="btn-rate" onClick={handleTogglePopup}>
                ĐÁNH GIÁ NGAY
              </div>
            </div>
            <Dialog open={showPopup} modal onOpenChange={setShowPopup}>
              <DialogOverlay className="tw- tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0" />
              <DialogContent className="popup-rate">
                <div id="form-rate">
                  <div className="top-popup">
                    <DialogTitle>
                      <div className="title-popup">Đánh giá {product.name}</div>
                    </DialogTitle>
                    <div className="icon-close" onClick={handleTogglePopup}>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 6.5L6.5 19.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5 6.5L19.5 19.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="content-rate">
                    <textarea
                      value={rateComment}
                      className="comment-rate"
                      rows={5}
                      onChange={(e) => setRateComment(e.target.value)}
                      placeholder="Mời bạn chia sẻ thêm một số cảm nhận..."
                    ></textarea>

                    <div className="option-rate">
                      <div className="left-opt">
                        {/* <p className="error-custom">messageRateComment</p> */}
                      </div>
                      <div className="right-opt">{rateComment.length} ký tự (Tối thiểu 10)</div>
                    </div>
                    <div className="feel-rate">
                      <div className="title-feel">Bạn cảm thấy thế nào về sản phẩm?</div>
                      <div className="opt-feel">
                        <div
                          className={`item-rate ${rateStar >= 1 ? 'active' : ''}`}
                          onClick={() => setRateStar(1)}
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9997 3.3335L25.1497 13.7668L36.6663 15.4502L28.333 23.5668L30.2997 35.0335L19.9997 29.6168L9.69967 35.0335L11.6663 23.5668L3.33301 15.4502L14.8497 13.7668L19.9997 3.3335Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`item-rate ${rateStar >= 2 ? 'active' : ''}`}
                          onClick={() => setRateStar(2)}
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9997 3.3335L25.1497 13.7668L36.6663 15.4502L28.333 23.5668L30.2997 35.0335L19.9997 29.6168L9.69967 35.0335L11.6663 23.5668L3.33301 15.4502L14.8497 13.7668L19.9997 3.3335Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`item-rate ${rateStar >= 3 ? 'active' : ''}`}
                          onClick={() => setRateStar(3)}
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9997 3.3335L25.1497 13.7668L36.6663 15.4502L28.333 23.5668L30.2997 35.0335L19.9997 29.6168L9.69967 35.0335L11.6663 23.5668L3.33301 15.4502L14.8497 13.7668L19.9997 3.3335Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`item-rate ${rateStar >= 4 ? 'active' : ''}`}
                          onClick={() => setRateStar(4)}
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9997 3.3335L25.1497 13.7668L36.6663 15.4502L28.333 23.5668L30.2997 35.0335L19.9997 29.6168L9.69967 35.0335L11.6663 23.5668L3.33301 15.4502L14.8497 13.7668L19.9997 3.3335Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`item-rate ${rateStar >= 5 ? 'active' : ''}`}
                          onClick={() => setRateStar(5)}
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9997 3.3335L25.1497 13.7668L36.6663 15.4502L28.333 23.5668L30.2997 35.0335L19.9997 29.6168L9.69967 35.0335L11.6663 23.5668L3.33301 15.4502L14.8497 13.7668L19.9997 3.3335Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="opt-feel-text">
                          <span>{STAR_STATUS[rateStar - 1]}</span>
                        </div>
                      </div>
                    </div>
                    <div className="submit-rate">
                      <button>GỬI ĐÁNH GIÁ</button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="content-product-review">
          <div className="top-content" id="product-review-section">
            <div className="title">Đánh giá</div>
            <div className="drop-down"></div>
            {reviews.data.map((review) => {
              return <ReviewDetail key={review.id} review={review} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReview;
