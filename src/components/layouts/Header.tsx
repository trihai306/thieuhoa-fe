import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import NoSSR from 'react-no-ssr';
import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';
import Image from '@/components/Image';
import { useAppDispatch, useAppSelector } from '@/redux';
import { setCartCount } from '@/redux/features/cart';
import { layoutService } from '@/services/layout.service';
import { MenuType } from '@/types/layout';
import { getCartTotal } from '@/utils/cart';

import MenuDrawer from './MenuDrawer';

const Header = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);
  const cartCount = useAppSelector((state) => state.cart.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getMenu = async () => {
      const res = await layoutService.menu();
      setMenu(res.data);
    };
    getMenu();

    const count = getCartTotal();
    dispatch(setCartCount(count));
  }, [dispatch]);
  return (
    <>
      <div className="tw-flex tw-justify-center tw-overflow-hidden tw-bg-[#fde57a]">
        <img
          className="tw-w-[200%] tw-max-w-[200%] lg:tw-w-auto"
          src={`${MEDIA_ENDPOINT}/v2/img/topbar2.png`}
          alt=""
        />
      </div>
      <header id="header" className="tw-sticky tw-top-0 tw-z-[49] lg:tw-relative">
        <div className="middle-header">
          <div className="left-content">
            <Link rel="nofollow" href={`/he-thong-cua-hang`}>
              <div className="item-store item">
                <Image
                  width={24}
                  height={24}
                  src={`${MEDIA_ENDPOINT}/v2/img/svg/location.svg`}
                  alt="store"
                />
                <span>Cửa hàng</span>
              </div>
            </Link>
            <Link href="tel:18009246">
              <div className="hotline item">
                <Image
                  width={24}
                  height={24}
                  src={`${MEDIA_ENDPOINT}/v2/img/svg/Hotline.svg`}
                  alt="hotline"
                />
                <div className="group-text">
                  <p>1800.9246</p>
                  <p className="free-hotline">(Miễn Phí)</p>
                </div>
              </div>
            </Link>
            <NoSSR>{isMobile && <MenuDrawer menu={menu} />}</NoSSR>
          </div>
          <div className="logo">
            <Link href={'/'}>
              <Image
                width="75"
                height="175"
                src={`${MEDIA_ENDPOINT}/v2/img/logo-web.svg`}
                alt="logo"
              />
            </Link>
          </div>
          <div className="right-content">
            <Link rel="nofollow" href={`/dang-nhap`}>
              <div className="user-icon icon">
                <Image
                  width={29}
                  height={29}
                  src={`${MEDIA_ENDPOINT}/v2/img/svg/user.svg`}
                  alt="user"
                />
                <p>Tài khoản</p>
              </div>
            </Link>
            <Link rel="nofollow" href={`/checkout`} className="icon-cart">
              <div className="cart-icon icon">
                <Image
                  width={29}
                  height={29}
                  src={`${MEDIA_ENDPOINT}/v2/img/svg/cart.svg`}
                  alt="user"
                />
                <span className="total" id="count-cart">
                  {cartCount}
                </span>
                <p>Giỏ hàng</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="div_ngang"></div>
        <div className="bottom-header">
          <div className="left-content">
            {menu.map((item) => (
              <div key={item.id} className="group-category">
                <div className="item-category">
                  <Link href={item.url.replace('https://thieuhoa.com.vn', '')}>{item.text}</Link>
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
                                <Link href={itemChild.url.replace('https://thieuhoa.com.vn', '')}>
                                  {itemChild.text}
                                </Link>
                              </div>
                              {itemChild.children.map((itemGrandChild) => {
                                return (
                                  <div key={itemGrandChild.id} className="name-category">
                                    <Link
                                      href={itemGrandChild.url.replace(
                                        'https://thieuhoa.com.vn',
                                        '',
                                      )}
                                    >
                                      {itemGrandChild.text}
                                    </Link>
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
                                <Link href={itemChild.url.replace('https://thieuhoa.com.vn', '')}>
                                  {itemChild.text}
                                </Link>
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
            <form className="tw-flex" action="/search" method="GET">
              <input
                type="search"
                name="keyword"
                className="search_product"
                placeholder="Tìm kiếm sản phẩm"
              />
              <button type="submit" className="icon-search" title="search">
                <Image width={20} height={20} src={`${MEDIA_ENDPOINT}/v2/img/search.png`} alt="" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
