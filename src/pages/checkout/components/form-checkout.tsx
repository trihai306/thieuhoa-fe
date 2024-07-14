import React, { useEffect, useState } from 'react';

import { checkoutService } from '@/services/checkout/checkout.service';
import { CartType, DataVoucher } from '@/types/checkout';

interface FormCheckoutProps {
  couponApi?: DataVoucher[];
}
export default function FormCheckout({ couponApi }: FormCheckoutProps) {
  const [coupons, setCoupons] = useState<DataVoucher[]>([]);
  const [dataCart, setDataCart] = useState<CartType>();
  useEffect(() => {
    const getCounpon = async () => {
      const res = await checkoutService.getCouponList();
      const resCart = await checkoutService.getDataCart();
      setCoupons(res.data);
      setDataCart(resCart.data);
      console.log(resCart);
    };
    getCounpon();
  }, []);
  return (
    <div className="main-content-pay">
      <div className="left-content-pay">
        <div>
          <div className="info-pay">
            <h2 className="title">Thông tin vận chuyển</h2>
            <div className="group-input">
              <div className="form-input">
                <div>
                  <input type="text" name="full_name" className="user" placeholder="Họ tên" />
                </div>
              </div>
              <div className="form-input">
                <div>
                  <input type="tel" name="phone" className="phone" placeholder="Số điện thoại" />
                </div>
              </div>
            </div>
            <div className="group-input-custom">
              <div className="form-input-custom">
                <input
                  type="text"
                  name="address"
                  className="email"
                  placeholder="Địa chỉ (Số nhà, tên đường...)"
                />
              </div>
            </div>
            <div className="form-input">
              <input
                type="text"
                name="cnote"
                className="note"
                placeholder="Ghi chú (Thời gian giao, địa chỉ chi tiết hơn...)"
              />
            </div>
          </div>
        </div>
        <div className="payment-methods">
          <div className="title">Phương thức thanh toán</div>
          <label className="group-checkbox">
            <div className="all-content">
              <div className="title-chek">
                <input
                  type="radio"
                  name="radio"
                  className="chbox"
                  checked
                  id="collapse1"
                  value="collapse1"
                />
                1. Thanh toán khi nhận hàng
              </div>
              <div v-show="activeCollapse === 'collapse1'">
                <ul className="ul-info-nhan-hang">
                  <li>
                    Đơn hàng từ <b>200K: Freeship toàn quốc.</b>
                  </li>
                  <li>
                    Nhận hàng <b>1 - 2 ngày (Nội Thành)</b> và <b>2 - 4 ngày (Ngoại Thành)</b>.
                  </li>
                  <li>Được quyền kiểm tra hàng, ưng ý rồi mới thanh toán.</li>
                  <li>Nêu không ưng ý, khách hàng có thể không nhận và không mất phí ship.</li>
                </ul>
              </div>
            </div>
          </label>
        </div>
        <div id="btn-checkout-check tw-w-[1px] tw-h-[1px]"></div>
        <p id="errorMessage" className="text-red tw-mb-[10px]">
          lỗi
        </p>

        <div className="btn-order" id="btn-checkout">
          Thanh toán
        </div>
      </div>
      <div className="right-content-pay">
        <h2 className="title">Giỏ hàng</h2>
        <div v-for="cartItem in dataCart.items" className="item-product-pay">
          <div className="form-group-checkbox">
            <div className="img">
              <img src="cartItem.image" alt="" />
              <div className="new-product-img">Mới</div>
              <div className="bottom-img-noti">x</div>
            </div>
          </div>
          <div className="product-item-name">
            <div className="top-product-item">
              <div className="name-product">cartname</div>
              <div className="tw-mb-[10px] tw-text-[14px]">
                Bán <strong>cartItem.order_count</strong> mỗi tháng
                <br />
                <strong>cartItem.reviews_count</strong> đánh giá
              </div>
              <div className="type-product">
                <div className="text-color">
                  <span>Màu:</span> cartItem.color
                </div>
                <div className="text-size">
                  <span>Size:</span> cartItem.size
                </div>
              </div>
            </div>
            <div className="amout">
              <div className="wrapper">
                <span className="minus">-</span>
                <span className="num">cartItem.quantity</span>
                <span className="plus">+</span>
              </div>
            </div>
            <div className="price-gr">
              <div className="price-now">cartItem.priceSumđ</div>
              <div className="old-price" v-if="cartItem.regularPriceSum > cartItem.priceSum">
                cartItem.regularPriceSumđ
              </div>

              <div className="delete-product">
                <img src="/v2/img/svg/gg_trash.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="exclusive-offer" v-show="promoDeals.length">
          <div className="title-exclusive">
            <span className="text1">
              Ưu đãi độc quyền{' '}
              <span className="text2"> - Bạn có thể mua các sản phẩm sau với giá ưu đãi </span>{' '}
            </span>
          </div>
          <div className="item-product-pay" v-for="deal in promoDeals">
            <div className="form-group-checkbox">
              <div className="img">
                <img src="deal.imageShow[0]" alt="" />
              </div>
            </div>
            <div className="product-item-name">
              <div className="top-product-item">
                <div className="name-product">deal.name</div>
                <div className="type-product">
                  <div className="select-box" v-if="deal.arrayColor.length">
                    <div className="select-box__current">
                      <div className="select-box__value" v-for="showColor in deal.arrayShowColor">
                        <input className="select-box__input" type="radio" />
                        <p className="select-box__input-text">showColor</p>
                      </div>

                      <img
                        className="select-box__icon"
                        src="/v2/img/chevron-down.png"
                        alt="Arrow Icon"
                        aria-hidden="true"
                      />
                    </div>
                    <ul className="select-box__list">
                      <li v-for="showColor in deal.arrayShowColor">
                        <label className="select-box__option">showColor</label>
                      </li>
                    </ul>
                  </div>
                  <div className="select-box" v-if="deal.arraySize.length">
                    <div className="select-box__current">
                      <div className="select-box__value" v-for="showSize in deal.arrayShowSize">
                        <input className="select-box__input" type="radio" />
                        <p className="select-box__input-text">showSize</p>
                      </div>
                      <img
                        className="select-box__icon"
                        src="/v2/img/chevron-down.png"
                        alt="Arrow Icon"
                      />
                    </div>
                    <ul className="select-box__list">
                      <li v-for="showSize in deal.arrayShowSize">
                        <label className="select-box__option">showSize</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="amout">
                  <div className="wrapper">
                    <span className="minus">-</span>
                    <span className="num">deal.quantity</span>
                    <span className="plus">+</span>
                  </div>
                </div>
              </div>
              <span className="text-note">Đơn từ 500K tặng ngay 1 khăn choàng cổ </span>
              <div className="bt-item">
                <div className="price-gr">
                  <div className="price-now">deal.priceMinFormat</div>
                  <div className="old-price">deal.originPriceMinFormatđ</div>
                </div>
                <div className="btn-buy">Mua kèm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-voucher">
          <div className="all-gr-voucher">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="item-voucher active tw-cursor-pointer">
                <svg
                  width="172"
                  height="51"
                  viewBox="0 0 172 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_742_6650" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.30188H172V2.88605C171.874 2.86618 171.744 2.8559 171.613 2.8559C170.115 2.8559 168.901 4.18997 168.901 5.83563C168.901 7.48129 170.115 8.81536 171.613 8.81536C171.744 8.81536 171.874 8.80507 172 8.7852V10.5482C171.874 10.5283 171.744 10.5181 171.613 10.5181C170.115 10.5181 168.901 11.8521 168.901 13.4978C168.901 15.1435 170.115 16.4775 171.613 16.4775C171.744 16.4775 171.874 16.4672 172 16.4474V18.2105C171.874 18.1906 171.744 18.1803 171.613 18.1803C170.115 18.1803 168.901 19.5144 168.901 21.16C168.901 22.8057 170.115 24.1398 171.613 24.1398C171.744 24.1398 171.874 24.1295 172 24.1096V25.8725C171.874 25.8526 171.744 25.8423 171.613 25.8423C170.115 25.8423 168.901 27.1764 168.901 28.8221C168.901 30.4677 170.115 31.8018 171.613 31.8018C171.744 31.8018 171.874 31.7915 172 31.7716V33.5347C171.874 33.5149 171.744 33.5046 171.613 33.5046C170.115 33.5046 168.901 34.8386 168.901 36.4843C168.901 38.13 170.115 39.464 171.613 39.464C171.744 39.464 171.874 39.4538 172 39.4339V41.1968C171.874 41.177 171.744 41.1667 171.613 41.1667C170.115 41.1667 168.901 42.5008 168.901 44.1464C168.901 45.7921 170.115 47.1261 171.613 47.1261C171.744 47.1261 171.874 47.1159 172 47.096V50.5316H0V47.9476C0.126055 47.9673 0.254904 47.9775 0.385922 47.9775C1.88356 47.9775 3.09763 46.6435 3.09763 44.9978C3.09763 43.3521 1.88356 42.0181 0.385922 42.0181C0.254904 42.0181 0.126055 42.0283 0 42.048V40.2854C0.126055 40.3051 0.254904 40.3154 0.385922 40.3154C1.88356 40.3154 3.09763 38.9813 3.09763 37.3356C3.09763 35.69 1.88356 34.3559 0.385922 34.3559C0.254904 34.3559 0.126055 34.3661 0 34.3858V32.6232C0.126055 32.643 0.254904 32.6532 0.385922 32.6532C1.88356 32.6532 3.09763 31.3191 3.09763 29.6735C3.09763 28.0278 1.88356 26.6937 0.385922 26.6937C0.254904 26.6937 0.126055 26.7039 0 26.7237V24.9612C0.126055 24.9809 0.254904 24.9911 0.385922 24.9911C1.88356 24.9911 3.09763 23.6571 3.09763 22.0114C3.09763 20.3657 1.88356 19.0317 0.385922 19.0317C0.254904 19.0317 0.126055 19.0419 0 19.0616V17.299C0.126055 17.3187 0.254904 17.3289 0.385922 17.3289C1.88356 17.3289 3.09763 15.9948 3.09763 14.3492C3.09763 12.7035 1.88356 11.3694 0.385922 11.3694C0.254904 11.3694 0.126055 11.3797 0 11.3994V9.63673C0.126055 9.65646 0.254904 9.66667 0.385922 9.66667C1.88356 9.66667 3.09763 8.3326 3.09763 6.68694C3.09763 5.04128 1.88356 3.70721 0.385922 3.70721C0.254904 3.70721 0.126055 3.71742 0 3.73716V0.30188Z"
                    />
                  </mask>
                  <path
                    d="M172 0.30188H173V-0.69812H172V0.30188ZM0 0.30188V-0.69812H-1V0.30188H0ZM172 2.88605L171.845 3.87393L173 4.05546V2.88605H172ZM172 8.7852H173V7.6158L171.845 7.79732L172 8.7852ZM172 10.5482L171.845 11.5361L173 11.7176V10.5482H172ZM172 16.4474H173V15.278L171.845 15.4595L172 16.4474ZM172 18.2105L171.845 19.1983L173 19.3799V18.2105H172ZM172 24.1096H173V22.9402L171.845 23.1217L172 24.1096ZM172 25.8725L171.845 26.8604L173 27.0419V25.8725H172ZM172 31.7716H173V30.6022L171.845 30.7838L172 31.7716ZM172 33.5347L171.845 34.5226L173 34.7041V33.5347H172ZM172 39.4339H173V38.2645L171.845 38.446L172 39.4339ZM172 41.1968L171.845 42.1847L173 42.3662V41.1968H172ZM172 47.096H173V45.9266L171.845 46.1081L172 47.096ZM172 50.5316V51.5316H173V50.5316H172ZM0 50.5316H-1V51.5316H0V50.5316ZM0 47.9476L0.154691 46.9596L-1 46.7788V47.9476H0ZM0 42.048H-1V43.2168L0.154691 43.036L0 42.048ZM0 40.2854L0.154691 39.2974L-1 39.1166V40.2854H0ZM0 34.3858H-1V35.5546L0.154691 35.3738L0 34.3858ZM0 32.6232L0.154691 31.6353L-1 31.4545V32.6232H0ZM0 26.7237H-1V27.8924L0.154677 27.7116L0 26.7237ZM0 24.9612L0.154677 23.9732L-1 23.7924V24.9612H0ZM0 19.0616H-1V20.2304L0.154677 20.0496L0 19.0616ZM0 17.299L0.154677 16.311L-1 16.1302V17.299H0ZM0 11.3994H-1V12.5681L0.154677 12.3874L0 11.3994ZM0 9.63673L0.154677 8.64876L-1 8.46799V9.63673H0ZM0 3.73716H-1V4.9059L0.154679 4.72512L0 3.73716ZM172 -0.69812H0V1.30188H172V-0.69812ZM173 2.88605V0.30188H171V2.88605H173ZM171.613 3.8559C171.692 3.8559 171.769 3.86209 171.845 3.87393L172.155 1.89817C171.978 1.87027 171.796 1.8559 171.613 1.8559V3.8559ZM169.901 5.83563C169.901 4.65147 170.754 3.8559 171.613 3.8559V1.8559C169.476 1.8559 167.901 3.72846 167.901 5.83563H169.901ZM171.613 7.81536C170.754 7.81536 169.901 7.01978 169.901 5.83563H167.901C167.901 7.94279 169.476 9.81536 171.613 9.81536V7.81536ZM171.845 7.79732C171.769 7.80917 171.692 7.81536 171.613 7.81536V9.81536C171.796 9.81536 171.978 9.80098 172.155 9.77308L171.845 7.79732ZM173 10.5482V8.7852H171V10.5482H173ZM171.613 11.5181C171.692 11.5181 171.769 11.5243 171.845 11.5361L172.155 9.56034C171.978 9.53244 171.796 9.51807 171.613 9.51807V11.5181ZM169.901 13.4978C169.901 12.3136 170.754 11.5181 171.613 11.5181V9.51807C169.476 9.51807 167.901 11.3906 167.901 13.4978H169.901ZM171.613 15.4775C170.754 15.4775 169.901 14.682 169.901 13.4978H167.901C167.901 15.605 169.476 17.4775 171.613 17.4775V15.4775ZM171.845 15.4595C171.769 15.4713 171.692 15.4775 171.613 15.4775V17.4775C171.796 17.4775 171.978 17.4632 172.155 17.4352L171.845 15.4595ZM173 18.2105V16.4474H171V18.2105H173ZM171.613 19.1803C171.692 19.1803 171.769 19.1865 171.845 19.1983L172.155 17.2226C171.978 17.1947 171.796 17.1803 171.613 17.1803V19.1803ZM169.901 21.16C169.901 19.9759 170.754 19.1803 171.613 19.1803V17.1803C169.476 17.1803 167.901 19.0529 167.901 21.16H169.901ZM171.613 23.1398C170.754 23.1398 169.901 22.3442 169.901 21.16H167.901C167.901 23.2672 169.476 25.1398 171.613 25.1398V23.1398ZM171.845 23.1217C171.769 23.1336 171.692 23.1398 171.613 23.1398V25.1398C171.796 25.1398 171.978 25.1254 172.155 25.0975L171.845 23.1217ZM173 25.8725V24.1096H171V25.8725H173ZM171.613 26.8423C171.692 26.8423 171.769 26.8485 171.845 26.8604L172.155 24.8846C171.978 24.8567 171.796 24.8423 171.613 24.8423V26.8423ZM169.901 28.8221C169.901 27.6379 170.754 26.8423 171.613 26.8423V24.8423C169.476 24.8423 167.901 26.7149 167.901 28.8221H169.901ZM171.613 30.8018C170.754 30.8018 169.901 30.0062 169.901 28.8221H167.901C167.901 30.9292 169.476 32.8018 171.613 32.8018V30.8018ZM171.845 30.7838C171.769 30.7956 171.692 30.8018 171.613 30.8018V32.8018C171.796 32.8018 171.978 32.7874 172.155 32.7595L171.845 30.7838ZM173 33.5347V31.7716H171V33.5347H173ZM171.613 34.5046C171.692 34.5046 171.769 34.5108 171.845 34.5226L172.155 32.5469C171.978 32.519 171.796 32.5046 171.613 32.5046V34.5046ZM169.901 36.4843C169.901 35.3002 170.754 34.5046 171.613 34.5046V32.5046C169.476 32.5046 167.901 34.3771 167.901 36.4843H169.901ZM171.613 38.464C170.754 38.464 169.901 37.6685 169.901 36.4843H167.901C167.901 38.5915 169.476 40.464 171.613 40.464V38.464ZM171.845 38.446C171.769 38.4578 171.692 38.464 171.613 38.464V40.464C171.796 40.464 171.978 40.4497 172.155 40.4218L171.845 38.446ZM173 41.1968V39.4339H171V41.1968H173ZM171.613 42.1667C171.692 42.1667 171.769 42.1729 171.845 42.1847L172.155 40.209C171.978 40.1811 171.796 40.1667 171.613 40.1667V42.1667ZM169.901 44.1464C169.901 42.9623 170.754 42.1667 171.613 42.1667V40.1667C169.476 40.1667 167.901 42.0393 167.901 44.1464H169.901ZM171.613 46.1261C170.754 46.1261 169.901 45.3306 169.901 44.1464H167.901C167.901 46.2536 169.476 48.1261 171.613 48.1261V46.1261ZM171.845 46.1081C171.769 46.12 171.692 46.1261 171.613 46.1261V48.1261C171.796 48.1261 171.978 48.1118 172.155 48.0839L171.845 46.1081ZM173 50.5316V47.096H171V50.5316H173ZM0 51.5316H172V49.5316H0V51.5316ZM-1 47.9476V50.5316H1V47.9476H-1ZM0.385922 46.9775C0.306952 46.9775 0.22982 46.9714 0.154691 46.9596L-0.154691 48.9355C0.0222899 48.9633 0.202855 48.9775 0.385922 48.9775V46.9775ZM2.09763 44.9978C2.09763 46.182 1.24466 46.9775 0.385922 46.9775V48.9775C2.52245 48.9775 4.09763 47.105 4.09763 44.9978H2.09763ZM0.385922 43.0181C1.24466 43.0181 2.09763 43.8136 2.09763 44.9978H4.09763C4.09763 42.8906 2.52245 41.0181 0.385922 41.0181V43.0181ZM0.154691 43.036C0.22982 43.0242 0.306952 43.0181 0.385922 43.0181V41.0181C0.202855 41.0181 0.0222899 41.0323 -0.154691 41.06L0.154691 43.036ZM-1 40.2854V42.048H1V40.2854H-1ZM0.385922 39.3154C0.306952 39.3154 0.22982 39.3092 0.154691 39.2974L-0.154691 41.2734C0.0222899 41.3011 0.202855 41.3154 0.385922 41.3154V39.3154ZM2.09763 37.3356C2.09763 38.5198 1.24466 39.3154 0.385922 39.3154V41.3154C2.52245 41.3154 4.09763 39.4428 4.09763 37.3356H2.09763ZM0.385922 35.3559C1.24466 35.3559 2.09763 36.1515 2.09763 37.3356H4.09763C4.09763 35.2285 2.52245 33.3559 0.385922 33.3559V35.3559ZM0.154691 35.3738C0.22982 35.362 0.306952 35.3559 0.385922 35.3559V33.3559C0.202855 33.3559 0.0222899 33.3702 -0.154691 33.3979L0.154691 35.3738ZM-1 32.6232V34.3858H1V32.6232H-1ZM0.385922 31.6532C0.306952 31.6532 0.22982 31.647 0.154691 31.6353L-0.154691 33.6112C0.0222899 33.6389 0.202855 33.6532 0.385922 33.6532V31.6532ZM2.09763 29.6735C2.09763 30.8576 1.24466 31.6532 0.385922 31.6532V33.6532C2.52245 33.6532 4.09763 31.7806 4.09763 29.6735H2.09763ZM0.385922 27.6937C1.24466 27.6937 2.09763 28.4893 2.09763 29.6735H4.09763C4.09763 27.5663 2.52245 25.6937 0.385922 25.6937V27.6937ZM0.154677 27.7116C0.229825 27.6999 0.306962 27.6937 0.385922 27.6937V25.6937C0.202846 25.6937 0.0222851 25.708 -0.154677 25.7357L0.154677 27.7116ZM-1 24.9612V26.7237H1V24.9612H-1ZM0.385922 23.9911C0.306962 23.9911 0.229825 23.985 0.154677 23.9732L-0.154677 25.9492C0.0222851 25.9769 0.202846 25.9911 0.385922 25.9911V23.9911ZM2.09763 22.0114C2.09763 23.1956 1.24466 23.9911 0.385922 23.9911V25.9911C2.52245 25.9911 4.09763 24.1186 4.09763 22.0114H2.09763ZM0.385922 20.0317C1.24466 20.0317 2.09763 20.8272 2.09763 22.0114H4.09763C4.09763 19.9042 2.52245 18.0317 0.385922 18.0317V20.0317ZM0.154677 20.0496C0.229825 20.0378 0.306962 20.0317 0.385922 20.0317V18.0317C0.202846 18.0317 0.0222851 18.046 -0.154677 18.0737L0.154677 20.0496ZM-1 17.299V19.0616H1V17.299H-1ZM0.385922 16.3289C0.306962 16.3289 0.229825 16.3228 0.154677 16.311L-0.154677 18.2869C0.0222851 18.3146 0.202846 18.3289 0.385922 18.3289V16.3289ZM2.09763 14.3492C2.09763 15.5333 1.24466 16.3289 0.385922 16.3289V18.3289C2.52245 18.3289 4.09763 16.4563 4.09763 14.3492H2.09763ZM0.385922 12.3694C1.24466 12.3694 2.09763 13.165 2.09763 14.3492H4.09763C4.09763 12.242 2.52245 10.3694 0.385922 10.3694V12.3694ZM0.154677 12.3874C0.229825 12.3756 0.306962 12.3694 0.385922 12.3694V10.3694C0.202846 10.3694 0.0222851 10.3837 -0.154677 10.4114L0.154677 12.3874ZM-1 9.63673V11.3994H1V9.63673H-1ZM0.385922 8.66667C0.306962 8.66667 0.229825 8.66053 0.154677 8.64876L-0.154677 10.6247C0.0222851 10.6524 0.202846 10.6667 0.385922 10.6667V8.66667ZM2.09763 6.68694C2.09763 7.8711 1.24466 8.66667 0.385922 8.66667V10.6667C2.52245 10.6667 4.09763 8.7941 4.09763 6.68694H2.09763ZM0.385922 4.70721C1.24466 4.70721 2.09763 5.50278 2.09763 6.68694H4.09763C4.09763 4.57979 2.52245 2.70721 0.385922 2.70721V4.70721ZM0.154679 4.72512C0.229827 4.71336 0.306963 4.70721 0.385922 4.70721V2.70721C0.202844 2.70721 0.0222833 2.72149 -0.154679 2.7492L0.154679 4.72512ZM-1 0.30188V3.73716H1V0.30188H-1Z"
                    fill="#666666"
                    fillOpacity="0.35"
                    mask="url(#path-1-inside-1_742_6650)"
                  />
                </svg>
                <div className="gr-text">
                  <p className="text-title">{coupon.code}</p>
                  <p className="text-voucher">{coupon.description}</p>
                  <p className="text-error">Sắp hết hạn: Còn 8 giờ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gr-apply tw-my-[10px]">
          <input
            type="text"
            name="enter-voucher"
            className="enter-voucher"
            placeholder="Nhập voucher"
          />
          <button className="btn-apply">Áp dụng</button>
        </div>
        <div className="gr-apply group-point tw-my-[10px]">
          <input type="number" name="use-point" placeholder="Sử dụng điểm" />
          <span className="user-point">this.customerPoint điểm</span>
        </div>
        <p className="text-green tw-mb-[10px] tw-mb-[5px]">Mã giảm giá đã được áp dụng!</p>
        <p className="text-red tw-mb-[10px]">couponData.errorMessage</p>
        <div className="group-price">
          <div className="left-group">Tạm tính</div>
          <div className="right-group">
            <div className="price-now">
              {dataCart?.discountFormat}đ
              {!!dataCart?.discountProduct && (
                <>
                  <br />
                  <span className="discount tw-text-[14px]">
                    (tiết kiệm {dataCart?.discountProductFormat}đ)
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        {!!dataCart?.discount && (
          <div className="group-price ">
            <div className="left-group">Mã giảm giá</div>
            <div className="right-group discount">
              <div className="price-now">-{dataCart.discountFormat}đ</div>
            </div>
          </div>
        )}
        {!!dataCart?.discountPointPrice && (
          <div className="group-price">
            <div className="left-group">Điểm tích lũy mua hàng</div>
            <div className="right-group discount">
              <div className="price-now">-dataCart.discountPointPriceFormatđ</div>
            </div>
          </div>
        )}

        <div className="group-price">
          <div className="left-group">Phí giao hàng</div>
          <div className="right-group">
            {dataCart?.shipFee ? (
              <div className="price-now">{dataCart.shipFeeFormat}đ</div>
            ) : (
              <div className="price-now">Miễn phí</div>
            )}
          </div>
        </div>
        <div className="group-price ">
          <div className="left-group">Tổng</div>
          <div className="right-group ">
            <div className=" total">{dataCart?.totalFormat}đ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
