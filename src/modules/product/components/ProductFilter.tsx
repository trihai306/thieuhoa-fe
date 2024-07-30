import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

import ClickOutside from '@/components/ClickOutside';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
type DropdownStatus = {
  size: boolean;
  color: boolean;
  price: boolean;
};

import { SearchQueryType } from '@/types';
interface ProductFilterProps {
  from: number;
  to: number;
  total: number;
  onSearch?: (query: SearchQueryType) => void;
}
const ProductFilter = ({ from, to, total, onSearch }: ProductFilterProps) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownStatus>({
    size: false,
    color: false,
    price: false,
  });

  const router = useRouter();

  const [price, setPrice] = useState(router.query.price);
  const [color, setColor] = useState(router.query.color);
  const [size, setSize] = useState(router.query.size);
  const [sort, setSort] = useState(router.query.sort);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const handleToggleDropdown = (target: keyof DropdownStatus) => {
    setOpenDropdown((pre) => {
      const status: DropdownStatus = {
        size: false,
        color: false,
        price: false,
      };
      status[target] = !pre[target];
      return status;
    });
  };
  const closeDropdown = () => {
    if (isMobile) return;
    setOpenDropdown({
      size: false,
      color: false,
      price: false,
    });
  };
  const handleShowFilterMobile = (isShow: boolean) => {
    setShowFilter(isShow);
  };
  const handleApplyFilter = (filter: Record<string, string | number>) => {
    onSearch?.(filter);
  };
  const handleApplySize = (size: string) => {
    handleApplyFilter({ size });
    setSize(size);
  };
  const handleApplyPrice = (price: string) => {
    handleApplyFilter({ price });
    setPrice(price);
  };
  const handleApplyColor = (color: string) => {
    handleApplyFilter({ color });
    setColor(color);
  };
  const handleApplySort = (sort: string) => {
    handleApplyFilter({ sort });
    setSort(sort);
  };

  const handleApplyFilterMobile = () => {
    setShowFilter(false);
    handleApplyFilter({
      price: `${price}`,
      color: `${color}`,
      size: `${size}`,
    });
  };
  return (
    <div className="top-filter">
      <ClickOutside onClickOutside={closeDropdown}>
        <div className="left-filter">
          <div className="form-desktop-filter" style={{ display: 'flex' }}>
            <div className="item-filter" onClick={() => handleToggleDropdown('size')}>
              <div className="multiselect">
                <div className="selectBox">
                  <select>
                    <option>Size</option>
                  </select>
                  <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                  <div className="overSelect" />
                </div>
                <div
                  className="checkboxes input_size"
                  style={{ display: openDropdown.size ? 'grid' : 'none' }}
                >
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="one"
                      checked={size === 'S'}
                      onChange={() => handleApplySize('S')}
                    />
                    S
                    <label htmlFor="one" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="two"
                      checked={size === 'M'}
                      onChange={() => handleApplySize('M')}
                    />
                    M
                    <label htmlFor="two" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="three"
                      checked={size === 'L'}
                      onChange={() => handleApplySize('L')}
                    />
                    L
                    <label htmlFor="three" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="four"
                      checked={size === 'XL'}
                      onChange={() => handleApplySize('XL')}
                    />
                    XL
                    <label htmlFor="four" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="four1"
                      checked={size === '2XL'}
                      onChange={() => handleApplySize('2XL')}
                    />
                    2XL
                    <label htmlFor="four1" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      name="size"
                      type="checkbox"
                      id="four3"
                      checked={size === '3XL'}
                      onChange={() => handleApplySize('3XL')}
                    />
                    3XL
                    <label htmlFor="four3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-filter" onClick={() => handleToggleDropdown('color')}>
              <div className="multiselect">
                <div className="selectBox">
                  <select>
                    <option>Màu sắc</option>
                  </select>
                  <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                  <div className="overSelect" />
                </div>
                <div
                  className="checkboxes"
                  style={{ display: openDropdown.color ? 'grid' : 'none' }}
                >
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-1"
                      checked={color === '1'}
                      onChange={() => handleApplyColor('1')}
                    />
                    Trắng
                    <label htmlFor="color-1" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-2"
                      checked={color === '2'}
                      onChange={() => handleApplyColor('2')}
                    />
                    Đỏ
                    <label htmlFor="color-2" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-3"
                      checked={color === '3'}
                      onChange={() => handleApplyColor('3')}
                    />
                    Xanh
                    <label htmlFor="color-3" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-4"
                      checked={color === '4'}
                      onChange={() => handleApplyColor('4')}
                    />
                    Đen
                    <label htmlFor="color-4" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-5"
                      checked={color === '5'}
                      onChange={() => handleApplyColor('5')}
                    />
                    Vàng
                    <label htmlFor="color-5" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="color-6"
                      checked={color === '6'}
                      onChange={() => handleApplyColor('6')}
                    />
                    Be
                    <label htmlFor="color-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-filter" onClick={() => handleToggleDropdown('price')}>
              <div className="multiselect">
                <div className="selectBox">
                  <select>
                    <option>Giá</option>
                  </select>
                  <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                  <div className="overSelect" />
                </div>
                <div
                  className="checkboxes price"
                  style={{ display: openDropdown.price ? 'grid' : 'none' }}
                >
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="price-1"
                      checked={price === '1'}
                      onChange={() => handleApplyPrice('1')}
                    />
                    Dưới 100.000đ
                    <label htmlFor="price-1" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="price-2"
                      checked={price === '2'}
                      onChange={() => handleApplyPrice('2')}
                    />
                    Từ 300.000đ - 500.000đ
                    <label htmlFor="price-2" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="price-3"
                      checked={price === '3'}
                      onChange={() => handleApplyPrice('3')}
                    />
                    Từ 200.000đ - 300.000đz
                    <label htmlFor="price-3" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="price-4"
                      checked={price === '4'}
                      onChange={() => handleApplyPrice('4')}
                    />
                    Từ 300.000đ - 500.000đ
                    <label htmlFor="price-4" />
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      id="price-5"
                      checked={price === '5'}
                      onChange={() => handleApplyPrice('5')}
                    />
                    Trên 500.000đ
                    <label htmlFor="price-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutside>
      <div className="right-filter">
        <span>
          <span className="bold">{`${from}-${to} `}</span>
          của <span className="bold">{total}</span> sản phẩm
        </span>
        <div className="item-filter">
          <div className="sort-by" onClick={() => handleShowFilterMobile(true)}>
            <span className="text-sortby">Bộ lọc</span>
            <svg
              width={13}
              height={12}
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.75 1.5V2.7525L8 6.32175V10.5H5V6.32175L1.25 2.75175V1.5H11.75ZM5.75 6V9.75H7.25V6L11 2.43V2.25H2V2.43L5.75 6Z"
                  fill="#222222"
                />
              </g>
            </svg>
          </div>
          <ClickOutside onClickOutside={() => setShowSort(false)}>
            <div
              className={`select_wrap ${showSort ? 'active' : ''}`}
              onClick={() => setShowSort((pre) => !pre)}
            >
              <ul className="default_option">
                <li>
                  <div className="option">
                    <p>Bán chạy nhất</p>
                  </div>
                </li>
              </ul>
              <ul className="select_ul">
                <li>
                  <div className="option" onClick={() => handleApplySort('best-seller')}>
                    <p>Bán chạy nhất</p>
                  </div>
                </li>
                <li>
                  <div className="option" onClick={() => handleApplySort('new')}>
                    <p>Hàng mới về</p>
                  </div>
                </li>
                <li>
                  <div className="option" onClick={() => handleApplySort('percent')}>
                    <p>Giảm giá nhiều nhất</p>
                  </div>
                </li>
                <li>
                  <div className="option" onClick={() => handleApplySort('price-asc')}>
                    <p>Giá từ thấp đến cao</p>
                  </div>
                </li>
                <li>
                  <div className="option" onClick={() => handleApplySort('price-desc')}>
                    <p>Giá từ cao đến thấp </p>
                  </div>
                </li>
              </ul>
            </div>
          </ClickOutside>
        </div>
      </div>

      <Dialog
        modal={true}
        open={showFilter}
        defaultOpen={showFilter}
        onOpenChange={(open) => {
          handleShowFilterMobile(open);
        }}
      >
        <DialogContent className="tw-h-[500px]">
          <DialogHeader>
            <DialogDescription className="tw-max-h-96 tw-overflow-x-auto">
              <div
                className="list-sortby"
                style={{
                  top: 0,
                }}
              >
                <div className="form-mobile-filter">
                  <div className="top-list">
                    <div
                      className="close-popup"
                      hidden
                      onClick={() => handleShowFilterMobile(false)}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            d="M18 6L6 18"
                            stroke="#222222"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L18 18"
                            stroke="#222222"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="title">Bộ Lọc</div>
                  </div>
                  <div className="group-list-sort">
                    <div className="item">
                      <div className="top-list-sort" onClick={() => handleToggleDropdown('size')}>
                        <div className="title">Size</div>
                        <div className="down">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#222222"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className="checkboxes"
                        style={{ display: openDropdown.size ? undefined : 'none' }}
                      >
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="one2"
                            checked={size === 'S'}
                            onClick={() => setSize('S')}
                          />
                          S
                          <label htmlFor="one2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="two2"
                            checked={size === 'M'}
                            onClick={() => setSize('M')}
                          />
                          M
                          <label htmlFor="two2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="three2"
                            checked={size === 'L'}
                            onClick={() => setSize('L')}
                          />
                          L
                          <label htmlFor="three2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="four2"
                            checked={size === 'XL'}
                            onClick={() => setSize('XL')}
                          />
                          XL
                          <label htmlFor="four2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="five"
                            checked={size === '2XL'}
                            onClick={() => setSize('2XL')}
                          />
                          2XL
                          <label htmlFor="five" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="six"
                            checked={size === '3XL'}
                            onClick={() => setSize('3XL')}
                          />
                          3XL
                          <label htmlFor="six" />
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="top-list-sort" onClick={() => handleToggleDropdown('color')}>
                        <div className="title">Màu sắc</div>
                        <div className="down">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#222222"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className="checkboxes"
                        style={{ display: openDropdown.color ? undefined : 'none' }}
                      >
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color1"
                            checked={color === '1'}
                            onClick={() => setColor('1')}
                          />
                          Trắng
                          <label htmlFor="color1" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color2"
                            checked={color === '2'}
                            onClick={() => setColor('2')}
                          />
                          Đỏ
                          <label htmlFor="color2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color3"
                            checked={color === '3'}
                            onClick={() => setColor('3')}
                          />
                          Xanh
                          <label htmlFor="color3" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color4"
                            checked={color === '4'}
                            onClick={() => setColor('4')}
                          />
                          Đen
                          <label htmlFor="color4" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color5"
                            checked={color === '5'}
                            onClick={() => setColor('5')}
                          />
                          Vàng
                          <label htmlFor="color5" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="color6"
                            checked={color === '6'}
                            onClick={() => setColor('6')}
                          />
                          Be
                          <label htmlFor="color6" />
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="top-list-sort" onClick={() => handleToggleDropdown('price')}>
                        <div className="title">Giá</div>
                        <div className="down">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#222222"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={`checkboxes price`}
                        style={{ display: openDropdown.price ? undefined : 'none' }}
                      >
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="price"
                            checked={price === '1'}
                            onClick={() => setPrice('1')}
                          />
                          Dưới 100.000đ
                          <label htmlFor="price" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="price1"
                            checked={price === '2'}
                            onClick={() => setPrice('2')}
                          />
                          Từ 100.000đ - 200.000đ
                          <label htmlFor="price1" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="price2"
                            checked={price === '3'}
                            onClick={() => setPrice('3')}
                          />
                          Từ 200.000đ - 300.000đ
                          <label htmlFor="price2" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="price3"
                            checked={price === '4'}
                            onClick={() => setPrice('4')}
                          />
                          Từ 300.000đ - 500.000đ
                          <label htmlFor="price3" />
                        </div>
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            id="price4"
                            checked={price === '5'}
                            onClick={() => setPrice('5')}
                          />
                          Trên 500.000đ
                          <label htmlFor="price4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="save-sort">
                    <button type="button" onClick={handleApplyFilterMobile}>
                      Xong
                    </button>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductFilter;
