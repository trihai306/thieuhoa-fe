import React from 'react';

const NewsPaperList = () => {
  const newsItems = [
    {
      title: 'vietstock.vn',
      href: 'https://vietstock.vn/2022/12/hanh-trinh-dua-thuong-hieu-thieu-hoa-den-gan-hon-voi-khach-hang-4511-1026815.htm',
      imgSrc: 'https://image.vietstock.vn/common/NoelVietstockLogo.gif?1',
      imgAlt: 'vietstock.vn',
    },
    {
      title: 'Voh.com.vn',
      href: 'https://voh.com.vn/thi-truong/gui-yeu-thuong-am-ap-tu-khan-choang-co-thieu-hoa-461798.html',
      imgSrc: 'https://voh.com.vn/images/Logo-VOH-08.svg',
      imgAlt: 'Voh.com.vn',
    },
    {
      title: 'congthuong.vn',
      href: 'https://congthuong.vn/cung-thoi-trang-thieu-hoa-mang-qua-tet-ve-cho-me-232426.html',
      imgSrc: 'https://congthuong.vn/modules/frontend/themes/baocongthuong/images/logo-2023.jpg',
      imgAlt: 'congthuong.vn',
    },
    {
      title: 'plo.vn',
      href: 'https://plo.vn/khan-choang-thieu-hoa-nang-tam-gia-tri-thuong-hieu-viet-post713847.html',
      imgSrc: 'https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png',
      imgAlt: 'plo.vn',
    },
    {
      title: 'Diendandoanhnghiep.vn',
      href: 'https://diendandoanhnghiep.vn/khoac-len-hanh-phuc-cung-nhung-chiec-ao-dep-nhat-tu-thieu-hoa-236776.html',
      imgSrc: 'https://diendandoanhnghiep.vn/themes/enternews/images/logo.png',
      imgAlt: 'Diendandoanhnghiep.vn',
    },
    {
      title: 'anninhthudo.vn',
      href: 'https://www.anninhthudo.vn/thieu-hoa-mang-den-nhung-buoc-di-tu-tin-cung-phai-dep-post526900.antd',
      imgSrc: 'https://static-cms-anninhthudo.epicdn.me/v3/web/styles/img/logo.png',
      imgAlt: 'anninhthudo.vn',
    },
    {
      title: 'afamily.vn',
      href: 'https://afamily.vn/thieu-hoa-lan-gio-moi-cho-xu-huong-thoi-trang-phai-dep-20201014132615017.chn',
      imgSrc: 'https://afamily.mediacdn.vn/web_images/icon-af.png',
      imgAlt: 'afamily.vn',
    },
  ];

  return (
    <div className="news-paper-list">
      <div className="news-paper-list-header">BÁO CHÍ NÓI GÌ VỀ THIỀU HOA</div>
      <div className="news-paper-list-content">
        {newsItems.map((item, index) => (
          <div className="news-paper-list-content-item" key={index}>
            <a title={item.title} rel="nofollow" href={item.href} target="_blank">
              <img
                src="/images/image-thumb.svg"
                data-src={item.imgSrc}
                alt={item.imgAlt}
                className="img-icon lozad"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer" style={{ overflow: 'auto' }}>
      <div className="content-footer">
        <div className="left-content">
          <div className="group-footer">
            <div className="title">CÔNG TY CỔ PHẦN THỜI TRANG TH</div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/carbon_location.png"
                alt=""
              />
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
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/fluent_call-20-regular.png"
                alt=""
              />
              <span>
                <a href="tel:18009246">1800.9246 (Miễn phí)</a>
              </span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/fluent_mail-16-regular.png"
                alt=""
              />
              <span>info@thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/clarity_world-line.png"
                alt=""
              />
              <span>thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/bytesize_clock.png"
                alt=""
              />
              <span>8h:00-22:00 từ Thứ Hai - Chủ Nhật</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/la_clipboard-list.png"
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
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/carbon_location.png"
                alt=""
              />
              <span>Trụ sở chính: 254 Cô Bắc, P. Cô Giang, Quận 1, Tp. Hồ Chí Minh</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/clarity_world-line.png"
                alt=""
              />
              <span>Thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/fluent_call-20-regular.png"
                alt=""
              />
              <span>
                <a href="tel:18009246">1800.9246</a>
              </span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/fluent_mail-16-regular.png"
                alt=""
              />
              <span>info@thieuhoa.com.vn</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/bytesize_clock.png"
                alt=""
              />
              <span>8h:00-22:00 từ Thứ Hai - Chủ Nhật</span>
            </div>
            <div className="item-footer">
              <img
                width="24"
                height="24"
                className="lozad"
                src="/images/image-thumb.svg"
                data-src="/v2/img/la_clipboard-list.png"
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
