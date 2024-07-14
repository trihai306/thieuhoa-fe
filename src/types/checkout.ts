export interface DataVoucher {
  id: number;
  code: string;
  description: string;
  start_date: string;
  end_date: string;
  from_value: number;
  can_used_times: number;
  used_times: number;
  value: number;
  value_max: any;
  type: number;
  status: number;
  created_at: string;
  updated_at: string;
  web_status: number;
  text_title: string;
}
export interface CartType {
  items: any[];
  dataGift: any[];
  subTotal: number;
  subTotalOrigin: number;
  subTotalFormat: string;
  total: number;
  totalFormat: string;
  maxUsePoint: number;
  totalOrigin: number;
  totalOriginFormat: string;
  discount: number;
  discountFormat: number;
  discountProduct: number;
  discountProductFormat: string;
  shipFee: number;
  shipFeeFormat: string;
  discountPointPrice: number;
  discountPointPriceFormat: string;
  discountShipFee: number;
  discountShipFeeFormat: string;
}

export interface Item {
  id: string;
  image: string;
  name: string;
  quantity: number;
  option: string;
  url: string;
  size: string;
  color: string;
  reviews_count: string;
  order_count: string;
  priceOrigin: number;
  priceSumOrigin: number;
  regularPriceSumOrigin: number;
  price: string;
  priceSum: string;
  regularPriceSum: string;
}
