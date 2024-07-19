import React from 'react';

const ProductFilter = ({ data }: any) => {
  return (
    <div className="top-filter">
      <div className="left-filter">
        <form
          className="form-desktop-filter"
          style={{ display: 'flex' }}
          action="https://thieuhoa.com.vn/search?keyword=a"
          method="GET"
        >
          <input name="keyword" type="text" hidden="true" defaultValue="a" />
          <div className="item-filter">
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>Size</option>
                </select>
                <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                <div className="overSelect" />
              </div>
              <div className="checkboxes input_size">
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="one" defaultValue="S" />S
                  <label htmlFor="one" />
                </div>
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="two" defaultValue="M" />M
                  <label htmlFor="two" />
                </div>
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="three" defaultValue="L" />L
                  <label htmlFor="three" />
                </div>
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="four" defaultValue="XL" />
                  XL
                  <label htmlFor="four" />
                </div>
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="four1" defaultValue="2XL" />
                  2XL
                  <label htmlFor="four1" />
                </div>
                <div className="item-checkbox">
                  <input name="size" type="checkbox" id="four3" defaultValue="3XL" />
                  3XL
                  <label htmlFor="four3" />
                </div>
              </div>
            </div>
          </div>
          <div className="item-filter">
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>Màu sắc</option>
                </select>
                <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                <div className="overSelect" />
              </div>
              <div className="checkboxes">
                <div className="item-checkbox">
                  <input type="checkbox" id={1} name="color" defaultValue={1} />
                  Trắng
                  <label htmlFor={1} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={2} name="color" defaultValue={2} />
                  Đỏ
                  <label htmlFor={2} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={3} name="color" defaultValue={3} />
                  Xanh
                  <label htmlFor={3} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" name="color" defaultValue={4} id={4} />
                  Đen
                  <label htmlFor={4} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" name="color" defaultValue={5} id={5} />
                  Vàng
                  <label htmlFor={5} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" name="color" defaultValue={6} id={6} />
                  Be
                  <label htmlFor={6} />
                </div>
              </div>
            </div>
          </div>
          <div className="item-filter">
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>Giá</option>
                </select>
                <img src="https://thieuhoa.com.vn/v2/img/chevron-down.png" alt="" />
                <div className="overSelect" />
              </div>
              <div className="checkboxes price">
                <div className="item-checkbox">
                  <input type="checkbox" id={7} name="price" defaultValue={1} />
                  Dưới 100.000đ
                  <label htmlFor={7} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={8} name="=price" defaultValue={2} />
                  Từ 300.000đ - 500.000đ
                  <label htmlFor={8} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={9} name="price" defaultValue={3} />
                  Từ 200.000đ - 300.000đz
                  <label htmlFor={9} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={10} name="price" defaultValue={4} />
                  Từ 300.000đ - 500.000đ
                  <label htmlFor={10} />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id={11} name="price" defaultValue={5} />
                  Trên 500.000đ
                  <label htmlFor={11} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="right-filter">
        <span>
          <span className="bold">
            {data?.data.products.from}-{data?.data.products.to}
          </span>
          của <span className="bold">{data?.data.products.total}</span> sản phẩm
        </span>
        <div className="item-filter">
          <div className="sort-by">
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
          <div className="select_wrap">
            <ul className="default_option">
              <li>
                <div className="option">
                  <p>Bán chạy nhất</p>
                </div>
              </li>
            </ul>
            <ul className="select_ul">
              <li>
                <div className="option " data-value="best-seller">
                  <p>Bán chạy nhất</p>
                </div>
              </li>
              <li>
                <div className="option" data-value="new">
                  <p>Hàng mới về</p>
                </div>
              </li>
              <li>
                <div className="option " data-value="percent">
                  <p>Giảm giá nhiều nhất</p>
                </div>
              </li>
              <li>
                <div className="option" data-value="price-asc">
                  <p>Giá từ thấp đến cao</p>
                </div>
              </li>
              <li>
                <div className="option" data-value="price-desc">
                  <p>Giá từ cao đến thấp </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="list-sortby" style={{ display: 'none' }}>
        <form className="form-mobile-filter" action="https://thieuhoa.com.vn/search" method="get">
          <div className="top-list">
            <div className="close-popup">
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
              <div className="top-list-sort">
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
              <div className="checkboxes hidden">
                <div className="item-checkbox">
                  <input type="checkbox" id="one2" name="size" defaultValue="S" />S
                  <label htmlFor="one2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="two2" name="size" defaultValue="M" />M
                  <label htmlFor="two2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="three2" name="size" defaultValue="L" />
                  L
                  <label htmlFor="three2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="four2" name="size" defaultValue="XL" />
                  XL
                  <label htmlFor="four2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="five" name="size" defaultValue="2XL" />
                  2XL
                  <label htmlFor="five" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="six" name="size" defaultValue="3XL" />
                  3XL
                  <label htmlFor="six" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="top-list-sort">
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
              <div className="checkboxes hidden">
                <div className="item-checkbox">
                  <input type="checkbox" id="color1" name="color" defaultValue={1} />
                  Trắng
                  <label htmlFor="color1" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="color2" name="color" defaultValue={2} />
                  Đỏ
                  <label htmlFor="color2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="color3" name="color" defaultValue={3} />
                  Xanh
                  <label htmlFor="color3" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="color4" name="color" defaultValue={4} />
                  Đen
                  <label htmlFor="color4" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="color5" name="color" defaultValue={5} />
                  Vàng
                  <label htmlFor="color5" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="color6" name="color" defaultValue={6} />
                  Be
                  <label htmlFor="color6" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="top-list-sort">
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
              <div className="checkboxes price hidden">
                <div className="item-checkbox">
                  <input type="checkbox" id="price" name="price" defaultValue={1} />
                  Dưới 100.000đ
                  <label htmlFor="price" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="price1" name="price" defaultValue={2} />
                  Từ 100.000đ - 200.000đ
                  <label htmlFor="price1" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="price2" name="price" defaultValue={3} />
                  Từ 200.000đ - 300.000đ
                  <label htmlFor="price2" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="price3" name="price" defaultValue={4} />
                  Từ 300.000đ - 500.000đ
                  <label htmlFor="price3" />
                </div>
                <div className="item-checkbox">
                  <input type="checkbox" id="price4" name="price" defaultValue={5} />
                  Trên 500.000đ
                  <label htmlFor="price4" />
                </div>
              </div>
            </div>
          </div>
          <div className="save-sort">
            <button type="submit">Xong</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFilter;
