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
                src={`/v2/img/carbon_location.png`}
                alt={'image'}
                width={24}
                height={24}
              ></Image>
              <span>
                TRỤ SỞ: 254 Cô Bắc, P. Cô Giang, Quận 1, Tp. Hồ Chí Minh
                <br />
                Hệ thống chi nhánh:{' '}
                <a rel="nofollow" href="/store_list">
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
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-bao-mat-thong-tin">
                  <span>Chính Sách Bảo Mật</span>
                </a>
              </div>
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-thanh-toan">
                  <span>Chính Sách Thanh Toán</span>
                </a>
              </div>
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-van-chuyen">
                  <span>Chính Sách Vận Chuyển</span>
                </a>
              </div>
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-doi-tra-hang">
                  <span>Chính Sách Đổi Trả Hàng</span>
                </a>
              </div>
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-thanh-vien">
                  <span>Chính Sách Thành Viên</span>
                </a>
              </div>
              <div className="item-footer">
                <a rel="nofollow" href="/category_and_post/chinh-sach-bao-hanh">
                  <span>Chính Sách Bảo Hành</span>
                </a>
              </div>
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
              <div className="item-footer">
                <a href="/category_and_post/gioi-thieu-thieu-hoa">
                  <span>Giới Thiệu</span>
                </a>
              </div>
              <div className="item-footer">
                <a href="/category_and_post/lien-he-thieu-hoa">
                  <span>Liên Hệ</span>
                </a>
              </div>
              <div className="item-footer">
                <a href="/category_and_post/huong-dan-chon-size">
                  <span>Hướng Dẫn Chọn Size</span>
                </a>
              </div>
              <div className="item-footer">
                <a href="/category_and_post/huong-dan-mua-hang">
                  <span>Hướng Dẫn Mua Hàng</span>
                </a>
              </div>
              <div className="item-footer">
                <a href="/category_and_post/quy-dinh-su-dung">
                  <span>Quy Định Sử Dụng</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="group-footer">
            <div className="title">CÔNG TY TNHH THƯƠNG MẠI THIỀU HOA</div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/carbon_location.png"
                alt=""
              />
              <span>Trụ sở chính: 254 Cô Bắc, P. Cô Giang, Quận 1, Tp. Hồ Chí Minh</span>
            </div>
            <div className="item-footer">
              <Image
                width="24"
                height="24"
                className="lozad"
                src="/v2/img/clarity_world-line.png"
                alt=""
              />
              <span>Thieuhoa.com.vn</span>
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
                <a href="tel:18009246">1800.9246</a>
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
            <div className="title">DỊCH VỤ KHÁCH HÀNG</div>
            <div className="item-footer">
              <a rel="nofollow" href="/category_and_post/huong-dan-thanh-toan">
                <span>Hướng Dẫn Thanh Toán</span>
              </a>
            </div>
            <div className="item-footer">
              <a rel="nofollow" href="/category_and_post/chinh-sach-van-chuyen">
                <span>Chính Sách Vận Chuyển</span>
              </a>
            </div>
            <div className="item-footer">
              <a rel="nofollow" href="/category_and_post/chinh-sach-bao-mat-thong-tin">
                <span>Chính Sách Bảo Mật</span>
              </a>
            </div>
            <div className="item-footer">
              <a rel="nofollow" href="/category_and_post/chinh-sach-doi-tra-hang">
                <span>Chính Sách Đổi Trả Hàng</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
