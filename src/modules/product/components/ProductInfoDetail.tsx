import React, { useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { map } from 'lodash';
import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useAppDispatch } from '@/redux';
import { setCartCount } from '@/redux/features/cart';
import { addProductToCart, getCartTotal } from '@/utils/cart';

import { ProductDetail } from '../types';

import ProductVoucher from './ProductVoucher';

export type ProductInfoDetailProps = {
  data: ProductDetail;
};

const ProductInfoDetail: React.FC<ProductInfoDetailProps> = ({ data }) => {
  const product = data.product;
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const productStock = useMemo(() => {
    return product?.variations.find(
      (stock) => stock.color === selectedColor && stock.size === selectedSize,
    )?.stock;
  }, [product, selectedColor, selectedSize]);

  const handleAddCart = () => {
    const variation = product.variations.find(
      (item) => item.color === selectedColor && item.size === selectedSize,
    );
    addProductToCart({
      product_id: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      variation_id: variation.id,
    });
    const count = getCartTotal();
    dispatch(setCartCount(count));
    toast.success('Đã thêm sản phẩm vào giỏ hàng');
  };

  const storeOffline = useMemo(() => {
    return map(data.dataStock.offline, (value) => value);
  }, [data]);

  const storeOnline = useMemo(() => {
    return map(data.dataStock.online, (value) => value);
  }, [data]);

  useEffect(() => {
    if (!product) return;
    setSelectedColor(product?.colors[0]?.color ?? product.arrayColor[0]);
    setSelectedSize(product.arraySize[0]);
  }, [product]);

  const renderColor = useCallback(() => {
    if (product.colors.length) {
      return (
        <div className="group-color">
          <div className="title">
            Màu sắc: <strong id="color-name">{selectedColor}</strong>
          </div>
          <div className="color">
            {product?.colors.map((colorItem, key) => (
              <button
                onClick={() => setSelectedColor(colorItem.color)}
                key={key}
                data-property={colorItem.color}
                className={`color-item select-product-color ${
                  colorItem.color === selectedColor ? 'active' : ''
                }`}
              >
                <img className="lozad" src={colorItem.thumbnail} alt={colorItem.color} />
              </button>
            ))}
          </div>
        </div>
      );
    }
    if (product.arrayColor.length) {
      return (
        <div className="group-color">
          <div className="title">
            Màu sắc: <strong id="color-name">{selectedColor}</strong>
          </div>
          <div className="color">
            {product.arrayColor.map((colorItem) => {
              return (
                <button
                  key={colorItem}
                  className={`color-item-text select-product-color ${
                    colorItem === selectedColor ? 'active' : ''
                  }`}
                  onClick={() => setSelectedColor(colorItem)}
                >
                  {colorItem}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
  }, [product.arrayColor, product.colors, selectedColor]);
  if (!product) return null;

  return (
    <div className="right-product-detail">
      <div className="header-right">
        <h1 className="name-title">{product.name}</h1>
        <div className="bottom-head">
          <div className="rate-view item-head">
            <span>{product?.numberStar}/5</span>
            <div className="tw-flex" dangerouslySetInnerHTML={{ __html: product.htmlStar }}></div>
          </div>
          <div className="total-rate item-head">
            <span className="number">{product?.reviews_count}</span> đánh giá
          </div>
          <div className="sold item-head">
            Bán <span className="number"> {product?.order_count}</span> mỗi tháng
          </div>
          <div className="status-prod">
            {product?.totalStock === 0 ? (
              <div>
                <span className="title">Tình trạng:</span>
                <span className="text-status">Hết hàng</span>
              </div>
            ) : (
              <div>
                <span className="title">Tình trạng:</span>
                <span className="text-status">Còn hàng</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="group-price-voucher">
        <div className="gr-price">
          <div className="price-now">{new Intl.NumberFormat().format(product?.priceMin)}đ</div>
          {!!product?.discount && (
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
        <ProductVoucher vouchers={data?.dataVoucher} />
      </div>

      {renderColor()}

      <div className="group-size">
        <div className="top-size">
          <span>
            Chọn size (45kg đến 80kg): <strong id="size-name">{selectedSize}</strong>
          </span>
          <div className="right-top-size">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.8335 9.33331H4.16683C2.60416 9.33331 1.3335 10.5293 1.3335 12V20C1.3335 21.4706 2.60416 22.6666 4.16683 22.6666H27.8335C29.3962 22.6666 30.6668 21.4706 30.6668 20V12C30.6668 10.5293 29.3962 9.33331 27.8335 9.33331ZM27.8335 20H4.16683C4.09083 20 4.03883 19.9786 4.01616 19.9786C4.00683 19.9786 4.0015 19.9813 4.00016 19.9893L3.98416 12.0613C3.9935 12.048 4.0535 12 4.16683 12H6.66683V16H9.3335V12H12.0002V17.3333H14.6668V12H17.3335V16H20.0002V12H22.6668V17.3333H25.3335V12H27.8335C27.9388 12.0013 27.9962 12.0373 28.0002 12.0106L28.0162 19.9386C28.0068 19.952 27.9468 20 27.8335 20Z"
                fill="#222222"
              />
            </svg>
            <Dialog>
              <DialogTrigger>
                <span>Hướng dẫn chọn size</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hướng dẫn chọn size</DialogTitle>
                  <DialogDescription>
                    <div className="content-guide">
                      <div className="icon-close-guide">
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 6.5L6.5 19.5"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.5 6.5L19.5 19.5"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <img
                        src="https://thieuhoa.com.vn/wp-content/uploads/2022/10/2x3QUR9StS6JBFRM5eu03g1cLAud07pBjc3lnvvB.webp"
                        alt=""
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="option-size">
          {product.arraySize.map((size, key) => (
            <button
              onClick={() => setSelectedSize(size)}
              key={key}
              data-property={size}
              className={`size select-product-size ${selectedSize === size ? 'active' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <span id="message-check-select_property" className="text-red hidden">
        Vui lòng chọn thuộc tính sản phẩm! <br />
      </span>
      <span id="message-check-product-stock" className="text-amount">
        Còn
        <span id="notice-product-stock" className="number">
          {` ${productStock} `}
        </span>
        sản phẩm
      </span>
      <div className="amout">
        <div className="wrapper">
          <span className="minus" onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
            -
          </span>
          <span id="quantity-num" className="num">
            {quantity}
          </span>
          <span className="plus" onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </span>
        </div>
        <button onClick={handleAddCart} id="product-add-to-cart" className="btn-add-cart ">
          <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_724_13047)">
              <path
                d="M18.0892 7.63636C18.0892 7.34091 17.9979 7.08523 17.8152 6.86932C17.6325 6.65341 17.4162 6.54545 17.1662 6.54545H15.32V4.36364C15.32 4.06818 15.2287 3.8125 15.046 3.59659C14.8633 3.38068 14.6469 3.27273 14.3969 3.27273C14.1469 3.27273 13.9306 3.38068 13.7479 3.59659C13.5652 3.8125 13.4739 4.06818 13.4739 4.36364V6.54545H11.6277C11.3777 6.54545 11.1614 6.65341 10.9787 6.86932C10.796 7.08523 10.7046 7.34091 10.7046 7.63636C10.7046 7.93182 10.796 8.1875 10.9787 8.40341C11.1614 8.61932 11.3777 8.72727 11.6277 8.72727H13.4739V10.9091C13.4739 11.2045 13.5652 11.4602 13.7479 11.6761C13.9306 11.892 14.1469 12 14.3969 12C14.6469 12 14.8633 11.892 15.046 11.6761C15.2287 11.4602 15.32 11.2045 15.32 10.9091V8.72727H17.1662C17.4162 8.72727 17.6325 8.61932 17.8152 8.40341C17.9979 8.1875 18.0892 7.93182 18.0892 7.63636ZM9.78155 21.8182C9.78155 22.4205 9.60126 22.9347 9.24069 23.3608C8.88011 23.7869 8.44501 24 7.9354 24C7.42578 24 6.99068 23.7869 6.63011 23.3608C6.26953 22.9347 6.08924 22.4205 6.08924 21.8182C6.08924 21.2159 6.26953 20.7017 6.63011 20.2756C6.99068 19.8494 7.42578 19.6364 7.9354 19.6364C8.44501 19.6364 8.88011 19.8494 9.24069 20.2756C9.60126 20.7017 9.78155 21.2159 9.78155 21.8182ZM22.7046 21.8182C22.7046 22.4205 22.5243 22.9347 22.1638 23.3608C21.8032 23.7869 21.3681 24 20.8585 24C20.3489 24 19.9138 23.7869 19.5532 23.3608C19.1926 22.9347 19.0123 22.4205 19.0123 21.8182C19.0123 21.2159 19.1926 20.7017 19.5532 20.2756C19.9138 19.8494 20.3489 19.6364 20.8585 19.6364C21.3681 19.6364 21.8032 19.8494 22.1638 20.2756C22.5243 20.7017 22.7046 21.2159 22.7046 21.8182ZM24.5508 3.27273V12C24.5508 12.2727 24.4739 12.5142 24.32 12.7244C24.1662 12.9347 23.9691 13.0568 23.7287 13.0909L8.67097 15.1705C8.68059 15.25 8.70222 15.3722 8.73588 15.5369C8.76953 15.7017 8.79838 15.8523 8.82242 15.9886C8.84645 16.125 8.85847 16.25 8.85847 16.3636C8.85847 16.5455 8.74309 16.9091 8.51232 17.4545H21.7816C22.0316 17.4545 22.2479 17.5625 22.4306 17.7784C22.6133 17.9943 22.7046 18.25 22.7046 18.5455C22.7046 18.8409 22.6133 19.0966 22.4306 19.3125C22.2479 19.5284 22.0316 19.6364 21.7816 19.6364H7.01232C6.76232 19.6364 6.54597 19.5284 6.36328 19.3125C6.18059 19.0966 6.08924 18.8409 6.08924 18.5455C6.08924 18.3864 6.14213 18.1619 6.2479 17.8722C6.35367 17.5824 6.49549 17.2443 6.67338 16.858C6.85126 16.4716 6.94982 16.2557 6.96905 16.2102L4.41617 2.18182H1.47386C1.22386 2.18182 1.00751 2.07386 0.82482 1.85795C0.642127 1.64205 0.550781 1.38636 0.550781 1.09091C0.550781 0.795455 0.642127 0.539773 0.82482 0.323864C1.00751 0.107955 1.22386 0 1.47386 0H5.16617C5.32001 0 5.45703 0.0369318 5.57722 0.110795C5.69742 0.184659 5.79357 0.272727 5.86568 0.375C5.9378 0.477273 6.0003 0.616477 6.05318 0.792614C6.10607 0.96875 6.14213 1.11932 6.16136 1.24432C6.18059 1.36932 6.20703 1.53693 6.24068 1.74716C6.27434 1.95739 6.29597 2.10227 6.30559 2.18182H23.6277C23.8777 2.18182 24.0941 2.28977 24.2767 2.50568C24.4594 2.72159 24.5508 2.97727 24.5508 3.27273Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_724_13047">
                <rect width={24} height={24} fill="white" transform="translate(0.550781)" />
              </clipPath>
            </defs>
          </svg>
          <span>THÊM VÀO GIỎ HÀNG</span>
        </button>
      </div>
      <div className="hotline">
        <img src={`${MEDIA_ENDPOINT}/v2/img/svg/Hotline.svg`} alt="hotline" />
        <Link href="tel:18009246">18009246</Link> - <span>Hotline đặt hàng nhanh</span>
      </div>
      <div className="description-detail">
        <div className="go-to-store">
          <img src={`${MEDIA_ENDPOINT}/v2/img/svg/location.svg`} alt="" />
          <Dialog modal={true}>
            <DialogTrigger>
              <div>Xem cửa hàng có sản phẩm này</div>
            </DialogTrigger>
            <DialogContent className="tw-h-[500px]">
              <DialogHeader>
                <DialogTitle>Xem cửa hàng có sản phẩm này</DialogTitle>
                <DialogDescription className="tw-max-h-96 tw-overflow-x-auto">
                  <div className="">
                    <div className="gr-store">
                      {!!storeOffline &&
                        storeOffline.map((item) => (
                          <div key={item.id} className="item-store !tw-block ">
                            <div className="left-item">
                              <div className="name-store">Thiều Hoa - {item.name}</div>
                              <div className="address-store">{item.address}</div>
                              <div className="phone-store">
                                <Link
                                  href="https://maps.app.goo.gl/vnA95nuu7juz4kfC6"
                                  style={{
                                    color: 'rgb(34, 34, 34)',
                                    textDecoration: 'underline',
                                  }}
                                >
                                  Xem đường đi
                                </Link>
                              </div>
                            </div>
                            <div className="right-item">
                              <span>Còn hàng</span>
                            </div>
                          </div>
                        ))}

                      {storeOnline && (
                        <div className="item-store">
                          <div className="left-item">
                            <div className="name-store">Thiều Hoa - Kho Online</div>
                          </div>
                          <div className="right-item">
                            <span>Còn hàng</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="description-detail">
        <div className="salient-features">
          <div className="item-salient-features">
            <div className="header">
              <span>Hướng dẫn bảo quản</span> <span className="icon-open">-</span>
              <span className="icon-close">+</span>
            </div>
            <div className="gr-text">
              <div className="text-salient">
                <span className="title" />
                <span>Giặt riêng trong 1-2 nước đầu tiên</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Không ngâm trong nước/xà phòng quá 1 giờ</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Ủi với nhiệt độ thích hợp, không ủi lên hình in/thêu</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Giặt riêng với áo khác màu</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Tránh phơi dưới nắng gắt</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Hạn chế giặt và sấy khô quần áo bằng máy</span>
              </div>
            </div>
          </div>
          <div className="item-salient-features">
            <div className="header">
              <span>Quy định đổi hàng</span> <span className="icon-open">-</span>
              <span className="icon-close">+</span>
            </div>
            <div className="gr-text hidden">
              <div className="text-salient">
                <span className="title" />
                <span>
                  Hàng còn nguyên tem mác, hóa đơn, không bị dơ bẩn, hư hỏng, chưa qua sử dụng hoặc
                  sửa chữa, giặt tẩy...
                </span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Sản phẩm đã nhận không quá 7 ngày.</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Chi tiết chính sách đổi hàng: thieuhoa.com.vn/chinh-sach-doi-tra-hang</span>
              </div>
              <div className="text-salient">
                <span className="title" />
                <span>Hotline hỗ trợ miễn phí: 18009246</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gr-icon-share">
          <span>Chia sẻ</span>
          <Link
            href="https://www.facebook.com/sharer.php?u=https://thieuhoa.com.vn/vay-dam-trung-nien/dam-du-tiec-thiet-ke-DD4L0329"
            target="_blank"
          >
            <img src="https://thieuhoa.com.vn/v2/img/svg/face-icon.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="form-quick-checkout">
        <div className="title-q">Thông tin giao hàng nhanh</div>
        <div className="body">
          <span>
            <div className="form-input">
              <span>
                <input type="text" name="phone" placeholder="Số điện thoại" />
                <p className="error-custom" />
              </span>
            </div>
            <div className="form-input">
              <span>
                <input type="text" name="full_name" placeholder="Họ và tên" />
                <p className="error-custom" />
              </span>
            </div>
            <div className="form-input">
              <input type="text" name="address" placeholder="Địa chỉ nhận hàng" />
            </div>
          </span>
          <div className="form-input">
            <button id="btn-quick-checkout">Đặt hàng nhanh</button>
          </div>
          <div className="top-banner">
            <div className="group-banner">
              <div className="left-group">
                <img src={`${MEDIA_ENDPOINT}/v2/img/svg/volunteer_activism1.svg`} alt="" />
              </div>
              <div className="right-group">
                <p className="title text-base">100% Made in Viet Nam</p>
                <p className="text">Thiết kế độc quyền - tiêu chuẩn xuất khẩu</p>
              </div>
            </div>
            <div className="group-banner">
              <div className="left-group">
                <img src={`${MEDIA_ENDPOINT}/v2/img/svg/cargo-truck-1.svg`} alt="" />
              </div>
              <div className="right-group">
                <p className="title text-base">Miễn phí vận chuyển </p>
                <p className="text">Áp dụng đơn hàng từ 200k</p>
              </div>
            </div>
            <div className="group-banner">
              <div className="left-group">
                <img src={`${MEDIA_ENDPOINT}/v2/img/svg/cash-on-delivery1.svg`} alt="" />
              </div>
              <div className="right-group">
                <p className="title text-base">Kiểm hàng - Thanh toán tại nhà</p>
                <p className="text">Dễ dàng kiểm tra hàng trước khi thanh toán </p>
              </div>
            </div>
            <div className="group-banner">
              <div className="left-group">
                <img src={`${MEDIA_ENDPOINT}/v2/img/svg/verified_user1.svg`} alt="" />
              </div>
              <div className="right-group">
                <p className="title text-base">Cam kết 1 đổi 1 trong 7 ngày</p>
                <p className="text">Đổi hàng dễ dàng - thuận tiện</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDetail;
