import { useEffect, useState } from 'react';

import Image from '@/components/Image';
import { checkoutService } from '@/services/checkout/checkout.service';
import { layoutService } from '@/services/layout.service';
import { MenuType } from '@/types/layout';
const Header = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);
  const [cartNumber, setCartNumber] = useState(0);
  useEffect(() => {
    const getMenu = async () => {
      const res = await layoutService.menu();
      setMenu(res.data);
    };
    const getCartNumber = async () => {
      const res = await checkoutService.getCartNumber();
      setCartNumber(res.data.total);
    };
    getMenu();
    getCartNumber();
  }, []);
  return (
    <header id="header">
      {/* <Image
        width={0}
        height={0}
        className="img-topbar tw-w-full"
        src={`/v2/img/topbar2.png`}
        alt=""
      /> */}
      <div className="middle-header">
        <div className="left-content">
          <a rel="nofollow" href={`/he-thong-cua-hang`}>
            <div className="item-store item">
              <Image width={24} height={24} src={`/v2/img/svg/location.svg`} alt="store" />
              <span>Cửa hàng</span>
            </div>
          </a>
          <a href="tel:18009246">
            <div className="hotline item">
              <Image width={24} height={24} src={`/v2/img/svg/Hotline.svg`} alt="hotline" />
              <div className="group-text">
                <p>1800.9246</p>
                <p className="free-hotline">(Miễn Phí)</p>
              </div>
            </div>
          </a>
          <div className="category-mobi">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.998892 12H12.9989C13.2538 12.0003 13.4989 12.0979 13.6843 12.2728C13.8696 12.4478 13.9811 12.687 13.9961 12.9414C14.011 13.1958 13.9282 13.4464 13.7646 13.6418C13.601 13.8373 13.369 13.9629 13.1159 13.993L12.9989 14H0.998892C0.744012 13.9997 0.49886 13.9021 0.313524 13.7272C0.128188 13.5522 0.0166572 13.313 0.00172004 13.0586C-0.0132171 12.8042 0.0695667 12.5536 0.233157 12.3582C0.396747 12.1627 0.628796 12.0371 0.881892 12.007L0.998892 12H12.9989H0.998892ZM0.998892 6H18.9989C19.2538 6.00028 19.4989 6.09788 19.6843 6.27285C19.8696 6.44782 19.9811 6.68695 19.9961 6.94139C20.011 7.19584 19.9282 7.44638 19.7646 7.64183C19.601 7.83729 19.369 7.9629 19.1159 7.993L18.9989 8H0.998892C0.744012 7.99972 0.49886 7.90212 0.313524 7.72715C0.128188 7.55218 0.0166572 7.31305 0.00172004 7.05861C-0.0132171 6.80416 0.0695667 6.55362 0.233157 6.35817C0.396747 6.16271 0.628796 6.0371 0.881892 6.007L0.998892 6H18.9989H0.998892ZM0.998892 0H15.9989C16.2538 0.000282707 16.4989 0.0978789 16.6843 0.272848C16.8696 0.447817 16.9811 0.686953 16.9961 0.941395C17.011 1.19584 16.9282 1.44638 16.7646 1.64183C16.601 1.83729 16.369 1.9629 16.1159 1.993L15.9989 2H0.998892C0.744012 1.99972 0.49886 1.90212 0.313524 1.72715C0.128188 1.55218 0.0166572 1.31305 0.00172004 1.05861C-0.0132171 0.804163 0.0695667 0.553621 0.233157 0.358168C0.396747 0.162715 0.628796 0.0371036 0.881892 0.00699997L0.998892 0H15.9989H0.998892Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="logo">
          <a href={'/'}>
            <Image width="75" height="175" src={`/v2/img/logo-web.svg`} alt="logo" />
          </a>
        </div>
        <div className="right-content">
          <a rel="nofollow" href={`/dang-nhap`}>
            <div className="user-icon icon">
              <Image width={29} height={29} src={`/v2/img/svg/user.svg`} alt="user" />
              <p>Tài khoản</p>
            </div>
          </a>
          <a rel="nofollow" href={`/checkout`} className="icon-cart">
            <div className="cart-icon icon">
              <Image width={29} height={29} src={`/v2/img/svg/cart.svg`} alt="user" />
              <span className="total" id="count-cart">
                {cartNumber}
              </span>
              <p>Giỏ hàng</p>
            </div>
          </a>
        </div>
      </div>
      <div className="div_ngang"></div>
      <div className="bottom-header">
        <div className="left-content">
          {menu.map((item) => (
            <div key={item.id} className="group-category">
              <div className="item-category">
                <a href={item.url}>{item.text}</a>
              </div>
              {!!item.children?.length && (
                <div className="dropdown-category">
                  <div className="left-dropdown">
                    {item.children.map((itemChild) => {
                      if (!itemChild.children) return null;
                      if (itemChild.children.length > 0) {
                        return (
                          <div key={itemChild.id} className="group-item-category">
                            <div className="title">
                              <a href={itemChild.url}>{itemChild.text}</a>
                            </div>
                            {itemChild.children.map((itemGrandChild) => {
                              return (
                                <div key={itemGrandChild.id} className="name-category">
                                  <a
                                    href={itemGrandChild.url.replace('https://thieuhoa.com.vn', '')}
                                  >
                                    {itemGrandChild.text}
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        );
                      }
                      return null;
                    })}
                    <div key={item.id} className="group-item-category">
                      {item.children.map((itemChild) => {
                        if (!itemChild.children) return null;
                        if (itemChild.children.length < 1) {
                          return (
                            <div key={itemChild.id} className="title">
                              <a href={itemChild.url.replace('https://thieuhoa.com.vn', '')}>
                                {itemChild.text}
                              </a>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="right-content">
          <form className="tw-flex" action="/search" method="GET" data-hs-cf-bound="true">
            <input
              type="search"
              name="keyword"
              className="search_product"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button type="submit" className="icon-search" title="search">
              <Image width={20} height={20} src={`/v2/img/search.png`} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="list-category-mobi">
        <div className="left-list list-main">
          <div className="search">
            <form action="/search" className="flex" method="GET" data-hs-cf-bound="true">
              <input
                type="text"
                name="keyword"
                className="search-category"
                placeholder="Tìm kiếm nhanh..."
              />
              <button type="submit" className="icon-search icon-search-mobile">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                    fill="#222222"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="tab-wrapper">
            <ul className="tab">
              <li className="active">
                <a href="#tab-mobi-menu-387">THỜI TRANG</a>
              </li>
              <li>
                <a href="#tab-mobi-menu-619">PHỤ KIỆN</a>
              </li>
              <li>
                <a href="https://thieuhoa.com.vn/san-pham-moi">MỚI VỀ</a>
              </li>
              <li>
                <a href="https://thieuhoa.com.vn/best-seller">BÁN CHẠY</a>
              </li>
              <li>
                <a href="https://thieuhoa.com.vn/sale-off">SALE 199K</a>
              </li>
              <li>
                <a href="#tab-mobi-menu-444">BLOG</a>
              </li>
              <li>
                <a href="https://thieuhoa.com.vn/blog/canh-bao-mao-danh-thieu-hoa">CẢNH BÁO</a>
              </li>
              <li>
                <a href="#tab-mobi-menu-615">GIỚI THIỆU</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-item tab-main tab-new" id="tab-mobi-menu-387">
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/vay-dam-trung-nien">ĐẦM TRUNG NIÊN</a>
                    <span className="plus-sign text-right" data-toggle="child-list-396">
                      +
                    </span>
                  </div>
                  <ul id="child-list-396">
                    <li>
                      <a href="https://thieuhoa.com.vn/dam-du-tiec">ĐẦM DỰ TIỆC</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/vay-dam-suong">ĐẦM SUÔNG</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/dam-dao-pho">ĐẦM DẠO PHỐ</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/dam-truyen-thong">ĐẦM TRUYỀN THỐNG</a>
                    </li>
                  </ul>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/ao-trung-nien">ÁO TRUNG NIÊN</a>
                    <span className="plus-sign text-right" data-toggle="child-list-409">
                      +
                    </span>
                  </div>
                  <ul id="child-list-409">
                    <li>
                      <a href="https://thieuhoa.com.vn/ao-kieu-trung-nien">ÁO KIỂU</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/ao-thun-trung-nien">ÁO THUN</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/ao-khoac-nu">ÁO KHOÁC</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/ao-so-mi-trung-nien">ÁO SƠ MI</a>
                    </li>
                  </ul>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/quan-trung-nien">QUẦN TRUNG NIÊN</a>
                    <span className="plus-sign text-right" data-toggle="child-list-421">
                      +
                    </span>
                  </div>
                  <ul id="child-list-421">
                    <li>
                      <a href="https://thieuhoa.com.vn/quan-gia-vay">QUẦN GIẢ VÁY</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/quan-ong-suong">QUẦN ỐNG SUÔNG</a>
                    </li>
                  </ul>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/khan-choang-co">KHĂN CHOÀNG CỔ</a>
                    <span className="plus-sign text-right" data-toggle="child-list-427">
                      +
                    </span>
                  </div>
                  <ul id="child-list-427">
                    <li>
                      <a href="https://thieuhoa.com.vn/khan-cashmere">CASHMERE</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/khan-len">KHĂN LEN</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/khan-lua-to-tam">KHĂN LỤA TƠ TẰM</a>
                    </li>
                    <li>
                      <a href="https://thieuhoa.com.vn/khan-lua-satin">KHĂN LỤA SATIN</a>
                    </li>
                  </ul>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/ao-dai">ÁO DÀI</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/chan-vay">CHÂN VÁY</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/do-bo-trung-nien">ĐỒ BỘ</a>
                  </div>
                </div>
              </div>
              <div className="tab-item tab-main tab-new none" id="tab-mobi-menu-619">
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/tui-xach-nu">Túi xách nữ</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/giay-trung-nien">Giày Trung Niên</a>
                  </div>
                </div>
              </div>
              <div className="tab-item tab-main tab-new none" id="tab-mobi-menu-528"></div>
              <div className="tab-item tab-main tab-new none" id="tab-mobi-menu-629"></div>
              <div className="tab-item tab-main tab-new" id="tab-mobi-menu-442"></div>
              <div className="tab-item tab-main tab-new none" id="tab-mobi-menu-444">
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/kien-thuc-ve-thoi-trang">
                      Kiến thức về thời trang
                    </a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/tips-phoi-do">Tips Phối Đồ</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/cac-loai-vai">Các Loại Vải</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/xu-huong-thoi-trang">Xu Hướng</a>
                  </div>
                </div>
                <div className="left-item title">
                  <div className="name-item item-mobile">
                    <a href="https://thieuhoa.com.vn/dong-phuc">Đồng Phục</a>
                  </div>
                </div>
              </div>
              <div className="tab-item tab-main tab-new" id="tab-mobi-menu-581"></div>
            </div>
          </div>
        </div>
        <div className="left-list details-list hidden">
          <div className="top-details">
            <div className="back-popup">
              <img src="{{ asset('v2/img/svg/chevron-left.svg') }}" alt="" />
            </div>
            <div className="title">ÁO TRUNG NIÊN</div>
            <div></div>
          </div>
          <div className="group-item group-item-type">
            <div className="title">MUA THEO THỂ LOẠI</div>
            <div className="all-item">
              <a href="#" className="item">
                <div className="img">
                  <img
                    className="lozad"
                    src="{{ asset('images/image-thumb.svg') }}"
                    data-src="{{ asset('/v2/img/svg/H_1.svg') }}"
                    alt=""
                  />
                </div>
                <div className="name-item">Áo thun</div>
              </a>
            </div>
          </div>
          <div className="group-item ">
            <div className="title">MUA HÀNG THEO GIÁ</div>
            <div className="all-item column-2">
              <a
                rel="nofollow"
                href="{{ route('category_and_post', ['slug' => 'dong-gia-99k']) }}"
                className="item"
              >
                <div className="img">
                  <img
                    className="lozad"
                    src="{{ asset('images/image-thumb.svg') }}"
                    data-src="https://thieuhoa.com.vn/imagecache/thumbnail-category/wp-content/uploads/2022/10/XocKerQQqTuBXZ6QDen9FBefzwy0Tp1nSTKQRS5s.webp"
                    alt=""
                  />
                </div>
                <div className="name-item">Đồng giá 99K</div>
              </a>
              <a
                rel="nofollow"
                href="{{ route('category_and_post', ['slug' => 'dong-gia-199k']) }}"
                className="item"
              >
                <div className="img">
                  <img
                    className="lozad"
                    src="{{ asset('images/image-thumb.svg') }}"
                    data-src="https://thieuhoa.com.vn/imagecache/thumbnail-category/wp-content/uploads/2022/10/nY4nAwVK18S2fOXJ9L9u7fJltWxlAZ731E3N83AP.webp"
                    alt=""
                  />
                </div>
                <div className="name-item">Đồng giá 199K</div>
              </a>
            </div>
          </div>
        </div>
        <div className="close-popup">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                d="M18 6L6 18"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
