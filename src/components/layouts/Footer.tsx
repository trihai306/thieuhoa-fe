import React from 'react';

import Image from '@/components/Image';

const Footer = () => {
  return (
    <div id="footer" style={{ overflow: 'auto' }}>
      <div className="content-footer">
        <div className="left-content">
          <div className="group-footer">
            <div className="title">CÔNG TY CỔ PHẦN THỜI TRANG TH</div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/carbon_location.png"
                alt=""
              />
              <span>
                TRỤ SỞ: 254 Cô Bắc, P. Cô Giang, Quận 1, Tp. Hồ Chí Minh
                <br />
                Hệ thống chi nhánh:{' '}
                <a rel="nofollow" href="/store-list">
                  Xem thêm
                </a>
              </span>
              <br />
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/fluent_call-20-regular.png"
                alt=""
              />
              <span>
                <a href="tel:18009246">1800.9246 (Miễn phí)</a>
              </span>
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/fluent_mail-16-regular.png"
                alt=""
              />
              <span>info@thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/clarity_world-line.png"
                alt=""
              />
              <span>thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/bytesize_clock.png"
                alt=""
              />
              <span>8h:00-22:00 từ Thứ Hai - Chủ Nhật</span>
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/la_clipboard-list.png"
                alt=""
              />
              <span>MST: 0316099570 - 09/01/2020</span>
            </div>
          </div>
          <div className="group-footer">
            <div className="top-gr">
              <div className="title">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="icon-down">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bottom-gr">
              {[
                { href: '/chinh-sach-bao-mat-thong-tin', text: 'Chính Sách Bảo Mật' },
                { href: '/chinh-sach-thanh-toan', text: 'Chính Sách Thanh Toán' },
                { href: '/chinh-sach-van-chuyen', text: 'Chính Sách Vận Chuyển' },
                { href: '/chinh-sach-doi-tra-hang', text: 'Chính Sách Đổi Trả Hàng' },
                { href: '/chinh-sach-thanh-vien', text: 'Chính Sách Thành Viên' },
                { href: '/chinh-sach-bao-hanh', text: 'Chính Sách Bảo Hành' },
              ].map((item, index) => (
                <div className="item-footer" key={index}>
                  <a rel="nofollow" href={item.href}>
                    <span>{item.text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="group-footer">
            <div className="top-gr">
              <div className="title">VỀ CHÚNG TÔI</div>
              <div className="icon-down">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bottom-gr">
              {[
                { href: '/gioi-thieu-thieu-hoa', text: 'Giới Thiệu' },
                { href: '/store-list', text: 'Hệ thống cửa hàng' },
              ].map((item, index) => (
                <div className="item-footer" key={index}>
                  <a href={item.href}>
                    <span>{item.text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="title">KẾT NỐI VỚI CHÚNG TÔI</div>
          <div className="list-icon">
            <a href="https://www.facebook.com/thieuhoavn">
              <img
                width={50}
                height={50}
                className="lozad"
                src="https://thieuhoa.com.vn/v2/img/facebook.png"
                data-src="https://thieuhoa.com.vn/v2/img/facebook.png"
                alt=""
                data-loaded="true"
              />
            </a>
            <a href="https://zalo.me/388030919384134642">
              <img
                width={50}
                height={50}
                className="lozad"
                src="https://thieuhoa.com.vn/v2/img/zalo-large.png"
                data-src="https://thieuhoa.com.vn/v2/img/zalo-large.png"
                alt=""
                data-loaded="true"
              />
            </a>
            <a href="mailto:thoitrangthieuhoa@gmail.com">
              <img
                width={50}
                height={50}
                className="lozad"
                src="https://thieuhoa.com.vn/v2/img/mail.png"
                data-src="https://thieuhoa.com.vn/v2/img/mail.png"
                alt=""
                data-loaded="true"
              />
            </a>
          </div>
          <div className="group-email">
            <div className="title-mail">ĐĂNG KÝ NHẬN TIN TỪ THIEUHOA</div>
            <div className="item-email">
              <input type="text" placeholder="Địa chỉ email của bạn" className="email" />
              <button className="register-email" type="submit">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="zalo-promotion">
            <div className="title-promotion">QUAN TÂM ZALO OA TH</div>
            <div className="text">Nhận các thông tin khuyến mãi hấp dẫn</div>
            <div className="icon-zalo">
              <a href="https://zalo.me/388030919384134642">
                <img
                  className="lozad"
                  src="https://thieuhoa.com.vn/v2/img/zalo.png"
                  data-src="https://thieuhoa.com.vn/v2/img/zalo.png"
                  alt=""
                  data-loaded="true"
                />
                <span>Quan tâm</span>
              </a>
            </div>
          </div>
          <div className="group-icon">
            <div className="left-icon">
              <a href="http://online.gov.vn/Home/WebDetails/80642">
                <img
                  className="lozad"
                  src="https://thieuhoa.com.vn/v2/img/congthuong.png"
                  data-src="https://thieuhoa.com.vn/v2/img/congthuong.png"
                  alt=""
                  data-loaded="true"
                />
              </a>
            </div>
            <div className="right-icon">
              <a href="#" className="app-store">
                <img
                  className="lozad"
                  src="https://thieuhoa.com.vn/v2/img/App-Store.png"
                  data-src="https://thieuhoa.com.vn/v2/img/App-Store.png"
                  alt=""
                  data-loaded="true"
                />
              </a>
              <a href="#" className="google-play">
                <img
                  className="lozad"
                  src="https://thieuhoa.com.vn/v2/img/google-play.png"
                  data-src="https://thieuhoa.com.vn/v2/img/google-play.png"
                  alt=""
                  data-loaded="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="top-bottom-footer">
          <img
            className="lozad"
            src="https://thieuhoa.com.vn/v2/img/bi_c-circle.png"
            data-src="https://thieuhoa.com.vn/v2/img/bi_c-circle.png"
            alt=""
            data-loaded="true"
          />
          <span>2021 THIEUHOA bảo lưu tất cả các quyền</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
