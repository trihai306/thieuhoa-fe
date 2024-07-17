import React from 'react';
import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';

function BottomBanner() {
  return (
    <div className="top-banner">
      <Link href={`/sale-off`} className="text-base">
        <div className="group-banner">
          <div className="left-group">
            <img
              width="40"
              height="40"
              src={`${MEDIA_ENDPOINT}/v2/img/svg/confirmation_number.svg`}
              alt=""
            />
          </div>
          <div className="right-group">
            <p className="title">Giá tốt nhất</p>
            <p className="text">Giảm 15% đơn hàng đầu tiên</p>
          </div>
        </div>
      </Link>
      <Link href={`/vay-dam-trung-nien`} className="text-base">
        <div className="group-banner">
          <div className="left-group">
            <img
              width="40"
              height="40"
              src={`${MEDIA_ENDPOINT}/v2/img/svg/volunteer_activism.svg`}
              alt=""
            />
          </div>
          <div className="right-group">
            <p className="title">100% Made in Viet Nam</p>
            <p className="text">Được thử hàng và thanh toán khi nhận hàng</p>
          </div>
        </div>
      </Link>
      <Link href={`/chinh-sach-bao-hanh`} className="text-base">
        <div className="group-banner">
          <div className="left-group">
            <img
              width="40"
              height="40"
              src={`${MEDIA_ENDPOINT}/v2/img/svg/verified_user.svg`}
              alt=""
            />
          </div>
          <div className="right-group">
            <p className="title">Cam kết 1 đổi 1</p>
            <p className="text">Trong 7 ngày</p>
          </div>
        </div>
      </Link>
      <Link href={`/chinh-sach-van-chuyen`} className="text-base">
        <div className="group-banner">
          <div className="left-group">
            <img
              width="40"
              height="40"
              src={`${MEDIA_ENDPOINT}/v2/img/svg/watch_later.svg`}
              alt=""
            />
          </div>
          <div className="right-group">
            <p className="title">Giao hàng 4H</p>
            <p className="text">Nội thành Tp.HCM - HN </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BottomBanner;
