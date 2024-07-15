import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';

import Image from '@/components/Image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { checkoutService } from '@/services/checkout/checkout.service';
import { layoutService } from '@/services/layout.service';
import { MenuType } from '@/types/layout';

import { Button } from '../ui/button';

import MenuDrawer from './MenuDrawer';

const Header = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);
  console.log('header>>menu', menu);
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
      <div className="middle-header">
        <div className="left-content">
          <Link rel="nofollow" href={`/he-thong-cua-hang`}>
            <div className="item-store item">
              <Image width={24} height={24} src={`/v2/img/svg/location.svg`} alt="store" />
              <span>Cửa hàng</span>
            </div>
          </Link>
          <Link href="tel:18009246">
            <div className="hotline item">
              <Image width={24} height={24} src={`/v2/img/svg/Hotline.svg`} alt="hotline" />
              <div className="group-text">
                <p>1800.9246</p>
                <p className="free-hotline">(Miễn Phí)</p>
              </div>
            </div>
          </Link>
          <MenuDrawer menu={menu} />
        </div>
        <div className="logo">
          <Link href={'/'}>
            <Image width="75" height="175" src={`/v2/img/logo-web.svg`} alt="logo" />
          </Link>
        </div>
        <div className="right-content">
          <Link rel="nofollow" href={`/dang-nhap`}>
            <div className="user-icon icon">
              <Image width={29} height={29} src={`/v2/img/svg/user.svg`} alt="user" />
              <p>Tài khoản</p>
            </div>
          </Link>
          <Link rel="nofollow" href={`/checkout`} className="icon-cart">
            <div className="cart-icon icon">
              <Image width={29} height={29} src={`/v2/img/svg/cart.svg`} alt="user" />
              <span className="total" id="count-cart">
                {cartNumber}
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
                                    href={itemGrandChild.url.replace('https://thieuhoa.com.vn', '')}
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
    </header>
  );
};

export default Header;
