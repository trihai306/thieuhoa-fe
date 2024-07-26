import { useCallback, useEffect, useRef } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MenuType } from '@/types/layout';

import { Button } from '../ui/button';

const MenuDrawer = ({ menu }: { menu: MenuType[] }) => {
  const mapMenu = (menu: MenuType, level = 1) => {
    if (isEmpty(menu.children)) {
      return (
        <div
          key={menu.id}
          className={`tw-w-full hover:tw-bg-yellow-500 ${level === 1 ? 'title' : 0}`}
          style={{
            marginLeft: `${level * 10}px`,
          }}
        >
          <Link href={menu.url ? menu.url.replace('https://thieuhoa.com.vn', '') : '#'}>
            {menu ? menu.text : ''}
          </Link>
        </div>
      );
    }

    return (
      <div key={menu.id}>
        <div>
          <Link href={menu.url ? menu.url.replace('https://thieuhoa.com.vn', '') : '#'}>
            {menu ? menu.text : ''}
          </Link>
        </div>
        <div>
          {menu.children?.map((item) => {
            return mapMenu(item, level + 1);
          })}
        </div>
      </div>
    );
  };
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeStart = () => buttonToggleMenuRef.current?.click();

    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router]);
  const buttonToggleMenuRef = useRef(null);
  return (
    <Drawer direction="left">
      <DrawerTrigger ref={buttonToggleMenuRef}>
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
      </DrawerTrigger>
      <DrawerContent className="tw-flex tw-h-screen tw-w-[80%] tw-rounded-none">
        <DialogTitle />
        <div className="-tw-mt-6 tw-min-h-0 !tw-w-full tw-flex-1 tw-overflow-x-auto tw-bg-white">
          <div className="list-category-mobi tw-relative">
            <div className="list-main tw-h-full !tw-w-full tw-overflow-hidden tw-p-2">
              <div className="search">
                <form
                  action="/search"
                  className="tw-flex tw-flex-row tw-space-x-2"
                  method="GET"
                  data-hs-cf-bound="true"
                >
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
              <div>
                {/* <TabsList className="tw-h-[56px]">
                  {menu.map((item) => (
                    <TabsTrigger key={item.id} value={`${item.id}`}>
                      {item.text}
                    </TabsTrigger>
                  ))}
                </TabsList> */}

                {menu.map((item) => {
                  return (
                    <div key={item.id} className="tw-flex tw-h-full tw-flex-1 tw-flex-col">
                      {mapMenu(item)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="tw-bg-red-500">
              <svg
                color="#222222"
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
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
