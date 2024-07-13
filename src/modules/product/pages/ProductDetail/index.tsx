import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { productService } from '../../services/product.service';

const ProductDetail = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['product', 'all'],
    queryFn: async () => {
      return await productService.getProductDetail(
        'tui-xach-nu/tui-xach-thoi-trang-phoi-vai-sang-trong-TX4A0963',
      );
    },
  });
  const product = {
    name: 'Product Name',
    priceMin: 100000,
    numberStar: 4.5,
    reviews_count: 10,
    order_count: 82,
    totalStock: 20,
    discount: 10,
    originPriceMin: 110000,
    colors: [{ color: 'Red', thumbnail: '/path/to/thumbnail.jpg' }],
    arrayColor: ['Red', 'Blue'],
    arraySize: ['S', 'M', 'L'],
    present: {
      getImage: '/path/to/image.jpg',
      getGallery: ['/path/to/gallery1.jpg', '/path/to/gallery2.jpg'],
    },
    htmlStar: '<span>⭐⭐⭐⭐⭐</span>',
  };

  const categoryPost = { slug: 'category-slug', name: 'Category Name' };
  const buyTogethers = { count: () => 0 };
  const agent = { isDesktop: () => true, isMobile: () => false };
  const sizeChart = '/path/to/size-chart.jpg';

  const onClickProductImageZoom = () => console.log('Product image zoom');

  return (
    <div>
      <span itemscope itemtype="http://schema.org/Product" className="microdata">
        <meta itemprop="image" content={product.present.getImage} />
        <meta itemprop="name" content={product.name} />
        <meta itemprop="description" content="Meta Description" />
        <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
          <meta itemprop="price" content={product.priceMin} />
          <meta itemprop="priceCurrency" content="VND" />
        </span>
      </span>
      <div id="content-product-detail">
        <div className="bread-cumbs">
          <a className="text-base" href="/">
            Thiều Hoa
          </a>
          »
          <a className="text-base" href="/search">
            Sản phẩm
          </a>
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
          {agent.isDesktop() && (
            <div
              className={`left-product-detail ${
                buyTogethers.count() === 0 ? 'sticky-image-l' : ''
              }`}
            >
              <div className={`container ${buyTogethers.count() === 0 ? 'sticky-image' : ''}`}>
                <div className="all-show">
                  <div className="show" id="product-image-show">
                    {product.present.getGallery.map((image, key) => (
                      <img
                        key={key}
                        src={image}
                        height={agent.isMobile() ? 650 : 1059}
                        alt={product.name}
                      />
                    ))}
                  </div>
                  {!agent.isDesktop() && (
                    <div
                      id="small-img-roll"
                      style={{
                        marginTop: '5px',
                        height: '150px',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                      }}
                    >
                      {product.present.getGallery.map((image, key) => (
                        <div
                          key={key}
                          style={{ width: '90px', height: 'auto', marginRight: '10px' }}
                          className="image-des"
                        >
                          <img
                            height="135"
                            src={image}
                            style={{ width: '88px', margin: 'auto' }}
                            alt={product.name}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="small-img">
                  <div className="small-container">
                    {agent.isDesktop() && (
                      <div id="small-img-roll">
                        {product.present.getGallery.map((image, key) => (
                          <img
                            key={key}
                            src={image}
                            className="show-small-img"
                            alt={product.name}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {agent.isMobile() && (
            <div className="product-image-slider">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {product.present.getGallery.map((image, key) => (
                    <div key={key} className="swiper-slide" onClick={onClickProductImageZoom}>
                      <img src={image} alt={product.name} />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          )}
          <div className="right-product-detail">
            <div className="header-right">
              <h1 className="name-title">{product.name}</h1>
              <div className="bottom-head">
                <div className="rate-view item-head">
                  <span>{product.numberStar}/5</span>
                  <div dangerouslySetInnerHTML={{ __html: product.htmlStar }}></div>
                </div>
                <div className="total-rate item-head">
                  <span className="number">{product.reviews_count}</span> đánh giá
                </div>
                <div className="sold item-head">
                  Bán <span className="number"> {product.order_count}</span> mỗi tháng
                </div>
                <div className="status-prod">
                  {product.totalStock === 0 ? (
                    <div>
                      <span className="title">Tình trạng:</span>{' '}
                      <span className="text-status">Hết hàng</span>
                    </div>
                  ) : (
                    <div>
                      <span className="title">Tình trạng:</span>{' '}
                      <span className="text-status">Còn hàng</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="group-price-voucher">
              <div className="gr-price">
                <div className="price-now">{new Intl.NumberFormat().format(product.priceMin)}đ</div>
                {product.discount && (
                  <>
                    <div className="old-price">
                      {new Intl.NumberFormat().format(product.originPriceMin)}đ
                    </div>
                    <div className="discount">
                      <span>-{product.discount}%</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            {product.colors.length > 0 && (
              <div className="group-color">
                <div className="title">
                  Màu sắc: <strong id="color-name"></strong>
                </div>
                <div className="color">
                  {product.colors.map((colorItem, key) => (
                    <div
                      key={key}
                      data-property={colorItem.color}
                      className="color-item select-product-color"
                    >
                      <img
                        className="lozad"
                        src="/images/image-thumb-25-25.svg"
                        data-src={colorItem.thumbnail}
                        alt={colorItem.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product.arrayColor.length > 0 && (
              <div className="group-color">
                <div className="title">
                  Màu sắc: <strong id="color-name"></strong>
                </div>
                <div className="color">
                  {product.arrayColor.map((color, key) => (
                    <div
                      key={key}
                      data-property={color}
                      className="color-item-text select-product-color"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="group-size">
              <div className="top-size">
                <span>
                  Chọn size (45kg đến 80kg): <strong id="size-name"></strong>
                </span>
                {sizeChart && (
                  <div className="right-top-size">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.8335 9.33331H4.16683C2.60416 9.33331 1.3335 10.5293 1.3335 12V20C1.3335 21.4706 2.60416 22.6666 4.16683 22.6666H27.8335C29.3962 22.6666 30.6668 21.4706 30.6668 20V12C30.6668 10.5293 29.3962 9.33331 27.8335 9.33331ZM27.8335 20H4.16683C4.09083 20 4.03883 19.9786 4.01616 19.9786C4.00683 19.9786 4.0015 19.9813 4.00016 19.9893L3.98416 12.0613C3.9935 12.048 4.0535 12 4.16683 12H6.66683V16H9.3335V12H12.0002V17.3333H14.6668V12H17.3335V16H20.0002V12H22.6668V17.3333H25.3335V12H27.8335C27.9388 12.0013 27.9962 12.0373 28.0168 12.0613L28.0002 19.978C27.9962 19.9893 27.9435 20 27.8335 20Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div
                      className="text"
                      id="btn-size-chart"
                      data-src={sizeChart}
                      onClick={onClickProductImageZoom}
                    >
                      Bảng size
                    </div>
                  </div>
                )}
              </div>
              <div className="bottom-size">
                {product.arraySize.map((size, key) => (
                  <div key={key} data-property={size} className="size-item select-product-size">
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="group-button">
              <div className="button-main">
                <button className="add-to-cart button-add-cart button-add-cart-2">
                  Thêm vào giỏ hàng
                </button>
                <button className="buy-now add-to-cart-2 add-to-cart">Mua ngay</button>
              </div>
              <div className="group-message">
                <div className="main-message">
                  <div className="image">
                    <img src="/images/present.svg" alt="" />
                  </div>
                  <div className="content">
                    <span>Quà tặng: Tặng kèm 2 túi thơm</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-info">
              <div className="left-info">
                <div className="title">Thông tin sản phẩm</div>
                <div className="content" id="content-product-detail">
                  <p>Sản phẩm chất lượng cao...</p>
                </div>
              </div>
              <div className="right-info">
                <div className="title">Chi tiết sản phẩm</div>
                <div className="content" id="content-product-detail">
                  <p>Thông tin chi tiết...</p>
                </div>
              </div>
            </div>
            <div className="group-buy-together">
              <div className="buy-together-header">Mua kèm</div>
              <div className="buy-together-content">
                <div className="buy-together-item">
                  <img src="/images/product1.jpg" alt="product" />
                  <div className="buy-together-info">
                    <div className="name">Sản phẩm A</div>
                    <div className="price">50.000đ</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue="1" />
                  </div>
                </div>
                <div className="buy-together-item">
                  <img src="/images/product2.jpg" alt="product" />
                  <div className="buy-together-info">
                    <div className="name">Sản phẩm B</div>
                    <div className="price">100.000đ</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue="1" />
                  </div>
                </div>
              </div>
              <div className="buy-together-footer">
                <button className="button-add-cart">Thêm vào giỏ hàng</button>
                <button className="buy-now">Mua ngay</button>
              </div>
            </div>
            <div className="group-related-product">
              <div className="related-product-header">Sản phẩm liên quan</div>
              <div className="related-product-content">
                <div className="related-product-item">
                  <img src="/images/product3.jpg" alt="product" />
                  <div className="related-product-info">
                    <div className="name">Sản phẩm C</div>
                    <div className="price">150.000đ</div>
                  </div>
                </div>
                <div className="related-product-item">
                  <img src="/images/product4.jpg" alt="product" />
                  <div className="related-product-info">
                    <div className="name">Sản phẩm D</div>
                    <div className="price">200.000đ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-description">
              <div className="description-header">Mô tả sản phẩm</div>
              <div className="description-content" id="description-content">
                <p>Mô tả chi tiết sản phẩm...</p>
              </div>
            </div>
            <div className="group-reviews">
              <div className="reviews-header">Đánh giá sản phẩm</div>
              <div className="reviews-content">
                <div className="review-item">
                  <div className="review-author">
                    <img src="/images/user1.jpg" alt="user" />
                    <div className="author-info">
                      <div className="name">User A</div>
                      <div className="date">01/01/2024</div>
                    </div>
                  </div>
                  <div className="review-text">
                    <p>Đánh giá chi tiết...</p>
                  </div>
                </div>
                <div className="review-item">
                  <div className="review-author">
                    <img src="/images/user2.jpg" alt="user" />
                    <div className="author-info">
                      <div className="name">User B</div>
                      <div className="date">02/01/2024</div>
                    </div>
                  </div>
                  <div className="review-text">
                    <p>Đánh giá chi tiết...</p>
                  </div>
                </div>
              </div>
              <div className="reviews-footer">
                <button className="button-add-review">Viết đánh giá</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
