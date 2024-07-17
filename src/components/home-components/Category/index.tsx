import Link from 'next/link';

import { MEDIA_ENDPOINT } from '@/common/constants';

const CATEGORIES = [
  { slug: 'vay-dam-trung-nien', img: 'v2/img/svg/dam-trung-nien.svg', name: 'Đầm Trung Niên' },
  { slug: 'ao-kieu-trung-nien', img: 'v2/img/svg/ao-kieu-nu.svg', name: 'Áo Kiểu Nữ' },
  { slug: 'chan-vay', img: 'v2/img/svg/chan-vay.svg', name: 'Chân Váy' },
  { slug: 'ao-dai', img: 'v2/img/svg/ao-dai.svg', name: 'Áo Dài' },
  { slug: 'khan-choang-co', img: 'v2/img/svg/khan-choang-co.svg', name: 'Khăn Choàng Cổ' },
  { slug: 'dam-du-tiec', img: 'v2/img/svg/dam-da-hoi.svg', name: 'Đầm Dự Tiệc' },
  { slug: 'ao-thun-trung-nien', img: 'v2/img/svg/ao-thun.svg', name: 'Áo Thun' },
  { slug: 'quan-trung-nien', img: 'v2/img/svg/quan-trung-nien.svg', name: 'Quần Trung Niên' },
  { slug: 'do-bo-trung-nien', img: 'v2/img/svg/do-bo.svg', name: 'Đồ Bộ' },
  { slug: 'tui-xach-nu', img: 'v2/img/svg/tui-sach.svg', name: 'Túi Xách' },
];
const MOBILE_CATEGORIES = [
  { slug: 'vay-dam-trung-nien', img: '/v2/img/svg/dam-trung-nien.svg', name: 'Đầm Trung Niên' },
  { slug: 'ao-kieu-trung-nien', img: '/v2/img/svg/ao-kieu-nu.svg', name: 'Áo Kiểu Nữ' },
  { slug: 'chan-vay', img: '/v2/img/svg/chan-vay.svg', name: 'Chân Váy' },
  { slug: 'tui-xach-nu', img: '/v2/img/svg/tui-sach.svg', name: 'Túi Xách' },
  { slug: 'dam-du-tiec', img: '/v2/img/svg/dam-da-hoi.svg', name: 'Đầm Dự Tiệc' },
  { slug: 'ao-thun-trung-nien', img: '/v2/img/svg/ao-thun.svg', name: 'Áo Thun' },
  { slug: 'quan-trung-nien', img: '/v2/img/svg/quan-trung-nien.svg', name: 'Quần Trung Niên' },
  { slug: 'do-bo-trung-nien', img: '/v2/img/svg/do-bo.svg', name: 'Đồ Bộ' },
];
const Category = () => {
  return (
    <div className="list-category">
      <h1 className="title">
        <span>THỜI TRANG TRUNG NIÊN</span>
      </h1>
      <div className="group-item-list desktop">
        {CATEGORIES.map((category) => {
          return (
            <Link key={category['slug']} href={`/${category['slug']}`}>
              <div className="item-list-category">
                <div className="img">
                  <img width="64" height="64" src={`${MEDIA_ENDPOINT}/${category['img']}`} alt="" />
                </div>
                <div className="text-category">{category['name']}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="group-item-list mobi">
        {MOBILE_CATEGORIES.map((category) => {
          return (
            <Link key={category['slug']} href={`${category['slug']}`}>
              <div className="item-list-category">
                <div className="img">
                  <img width="33" height="33" src={`${MEDIA_ENDPOINT}/${category['img']}`} alt="" />
                </div>
                <div className="text-category">{category['name']}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
