import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { MEDIA_ENDPOINT } from '@/common/constants';
import HomeProductSlider from '@/components/HomeProductSlider';
import HomeSlider from '@/components/HomeSlider';
import { getAppLayout } from '@/components/layouts/AppLayout';
import { pagesService } from '@/services/pages.service';
import { NextPageWithLayout } from '@/types';

const Home: NextPageWithLayout = () => {
  const [sliders, setSliders] = useState<any[]>([]);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await pagesService.home();
      const { banners, dataVoucher, block: dataBlocks, categoryData: categoryDataRes } = data;
      setSliders(banners);
      setVouchers(dataVoucher);
      setBlocks(dataBlocks);
      setCategoryData(categoryDataRes);
    };
    getData();
  }, []);

  const categories = useMemo(() => {
    return [
      { slug: 'vay-dam-trung-nien', img: '/v2/img/svg/dam-trung-nien.svg', name: 'Đầm Trung Niên' },
      { slug: 'ao-kieu-trung-nien', img: '/v2/img/svg/ao-kieu-nu.svg', name: 'Áo Kiểu Nữ' },
      { slug: 'chan-vay', img: '/v2/img/svg/chan-vay.svg', name: 'Chân Váy' },
      { slug: 'ao-dai', img: '/v2/img/svg/ao-dai.svg', name: 'Áo Dài' },
      { slug: 'khan-choang-co', img: '/v2/img/svg/khan-choang-co.svg', name: 'Khăn Choàng Cổ' },
      { slug: 'dam-du-tiec', img: '/v2/img/svg/dam-da-hoi.svg', name: 'Đầm Dự Tiệc' },
      { slug: 'ao-thun-trung-nien', img: '/v2/img/svg/ao-thun.svg', name: 'Áo Thun' },
      { slug: 'quan-trung-nien', img: '/v2/img/svg/quan-trung-nien.svg', name: 'Quần Trung Niên' },
      { slug: 'do-bo-trung-nien', img: '/v2/img/svg/do-bo.svg', name: 'Đồ Bộ' },
      { slug: 'tui-xach-nu', img: '/v2/img/svg/tui-sach.svg', name: 'Túi Xách' },
    ];
  }, []);
  const categoriesMobile = useMemo(() => {
    return [
      { slug: 'vay-dam-trung-nien', img: '/v2/img/svg/dam-trung-nien.svg', name: 'Đầm Trung Niên' },
      { slug: 'ao-kieu-trung-nien', img: '/v2/img/svg/ao-kieu-nu.svg', name: 'Áo Kiểu Nữ' },
      { slug: 'chan-vay', img: '/v2/img/svg/chan-vay.svg', name: 'Chân Váy' },
      { slug: 'tui-xach-nu', img: '/v2/img/svg/tui-sach.svg', name: 'Túi Xách' },
      { slug: 'dam-du-tiec', img: '/v2/img/svg/dam-da-hoi.svg', name: 'Đầm Dự Tiệc' },
      { slug: 'ao-thun-trung-nien', img: '/v2/img/svg/ao-thun.svg', name: 'Áo Thun' },
      { slug: 'quan-trung-nien', img: '/v2/img/svg/quan-trung-nien.svg', name: 'Quần Trung Niên' },
      { slug: 'do-bo-trung-nien', img: '/v2/img/svg/do-bo.svg', name: 'Đồ Bộ' },
    ];
  }, []);
  const handleCopy = (event: any, code: string) => {
    event.preventDefault();
    event.target.innerText = 'Đã sao chép';
    navigator.clipboard.writeText(code);
  };
  return (
    <div id="content-homepage">
      <HomeSlider items={sliders} isMobile={isMobile} />

      <div className="home-search">
        <form action="/search" method="GET">
          <input
            type="text"
            name="keyword"
            className="search-category"
            placeholder="Tìm kiếm nhanh..."
          />
          <button type="submit" className="icon-search icon-search-mobile2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                fill="#64646433"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="list-category">
        <h1 className="title">
          <span>THỜI TRANG TRUNG NIÊN</span>
        </h1>
        <div className="group-item-list desktop">
          {categories.map((category) => {
            return (
              <a key={category['slug']} href={category['slug']}>
                <div className="item-list-category">
                  <div className="img">
                    <img
                      width="64"
                      height="64"
                      src={`${MEDIA_ENDPOINT}/${category['img']}`}
                      alt=""
                    />
                  </div>
                  <div className="text-category">{category['name']}</div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="group-item-list mobi">
          {categoriesMobile.map((category) => {
            return (
              <a key={category['slug']} href={category['slug']}>
                <div className="item-list-category">
                  <div className="img">
                    <img
                      width="33"
                      height="33"
                      src={`${MEDIA_ENDPOINT}/${category['img']}`}
                      alt=""
                    />
                  </div>
                  <div className="text-category">{category['name']}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div id="section_coupons" className="section_coupons">
        <div className="container-coupons">
          <div className="container-content">
            {vouchers.map((voucher) => {
              return (
                <div key={voucher.id} className="coupon-item">
                  <div className="coupon-wrap">
                    <div className="coupon_icon">
                      <img src={`${MEDIA_ENDPOINT}/v2/img/coupon2.svg`} alt="" />
                    </div>
                    <div className="coupon_body">
                      <div className="coupon_head">
                        <h3 className="coupon_title">MÃ: {voucher.code}</h3>
                        <div className="coupon_desc">{voucher.description}</div>
                      </div>
                      <div className="coupon_bot">
                        <button
                          className="coupon_copy"
                          onClick={(e) => handleCopy(e, voucher.code)}
                        >
                          Sao chép
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {blocks?.map((block) => {
        return (
          <div key={block.id} className="block-product">
            <div className="new-products">
              <div className="group-new-product">
                {block.products?.map((product: any) => {
                  return (
                    <div key={product.id} className="item-new-product">
                      <a href="{{ $product->url }}" rel="nofollow">
                        <img src={`${MEDIA_ENDPOINT}/images/image-thumb.svg`} alt={product.name} />
                        <div className="text-new">{product.name}</div>
                      </a>
                      <div className="price-product">
                        <span className="price-now">{product.price}đ</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      {categoryData?.map((categoryItem) => {
        return (
          <div key={categoryItem.id} className="new-products">
            <div className="title">
              <a className="text-base" href={categoryItem.slug}>
                <h2>{categoryItem.name}</h2>
              </a>
            </div>
            <HomeProductSlider items={categoryItem.dataProduct} />
            <div className="load-more tw-mt-[20px]">
              <div className="btn-load-more">
                <a className="xem_them tw-flex tw-items-center" href="">
                  <span>XEM THÊM</span>
                  <svg
                    width="11"
                    height="15"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.546 8.04801C10.6348 7.98685 10.7075 7.90501 10.7576 7.80955C10.8078 7.71409 10.834 7.60786 10.834 7.50001C10.834 7.39216 10.8078 7.28593 10.7576 7.19047C10.7075 7.09501 10.6348 7.01317 10.546 6.95201L1.87934 0.952011C1.77938 0.882561 1.6623 0.841834 1.54081 0.834255C1.41933 0.826675 1.29809 0.852533 1.19027 0.90902C1.08245 0.965507 0.992175 1.05046 0.929248 1.15465C0.866322 1.25885 0.833152 1.37829 0.833344 1.50001L0.833344 13.5C0.833846 13.6214 0.867442 13.7405 0.93052 13.8442C0.993597 13.948 1.08377 14.0326 1.19134 14.089C1.29891 14.1453 1.41981 14.1713 1.54103 14.1641C1.66226 14.1569 1.77922 14.1167 1.87934 14.048L10.546 8.04801Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
Home.getLayout = getAppLayout;

export default Home;
