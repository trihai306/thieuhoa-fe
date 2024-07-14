import React from 'react';

const ProductDescriptionDetail = () => {
  return (
    <div className="description-detail">
      <div className="salient-features">
        <div className="item-salient-features">
          <div className="header">
            <span>Hướng dẫn bảo quản</span>
            <span className="icon-open">-</span>
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
            <span>Quy định đổi hàng</span>
            <span className="icon-open">-</span>
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
        <a href="https://www.facebook.com/sharer.php?u={{ request()->url() }}" target="_blank">
          <img src="{{ asset('/v2/img/svg/face-icon.svg') }}" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProductDescriptionDetail;
