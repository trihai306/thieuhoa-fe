export interface StaticPost {
  staticPage: StaticPage;
  metaData: MetaData;
  dataView: DataView;
  hideHeader: boolean;
}

export interface StaticPage {
  id: number;
  status: number;
  title: string;
  slug: string;
  content: string;
  style: string;
  meta: string;
  created_at: string;
  updated_at: string;
  content_mobile: string;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  script: string;
}

export interface DataView {
  content: string;
  style: string;
  script_body: string;
  script: string;
}

export interface ProductPost {
  products: Products;
  category: Category;
  metaData: MetaData;
  filters: any[];
  childrenCategory: any[];
  parentCategory: any;
  productViews: any[];
  flashsaleData: FlashsaleData;
  schemaData: SchemaData;
  sortText: string;
  dataVoucher: DataVoucher[];
  productPaginate: ProductPaginate;
}

export interface Products {
  current_page: number;
  data: Daum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Daum {
  id: number;
  name: string;
  slug: string;
  full_path: string;
  sku: string;
  excerpt: string;
  content: string;
  meta: string;
  old_id: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  review_data: any;
  regular_price?: number;
  discount: number;
  price: any;
  sale_price: any;
  status: number;
  auto_sale: number;
  display: number;
  publish_date: string;
  extra: string;
  stock: number;
  order_count: number;
  cateSlug: string;
  arrayColor: string[];
  arraySize: any[];
  priceMin: number;
  originPriceMin: number;
  variations: Variation[];
}

export interface Variation {
  id: number;
  product_id: number;
  name: string;
  old_id: any;
  id_nhanh: number;
  regular_price: number;
  sale_price: number;
  price: number;
  sku: string;
  attribute: any;
  stock: number;
  color: string;
  size: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  parent_id: any;
  last_parent_id: any;
  meta: string;
  product_count: number;
  description: string;
  created_at: string;
  updated_at: string;
  banner: string;
  html: string;
  banner_link: any;
  size_chart: any;
  sort_type: number;
  children: any[];
  parent: any;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  meta_canonical: string;
}

export interface FlashsaleData {
  has_flashsale: boolean;
}

export interface SchemaData {
  breadcrumbList: BreadcrumbList;
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  Name: string;
  ItemListElement: ItemListElement[];
}

export interface ItemListElement {
  '@type': string;
  Name: string;
  Item: Item;
  Position: number;
}

export interface Item {
  '@type': string;
  '@id': string;
  Url: string;
}

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

export interface ProductPaginate {
  current_page: number;
  data: Daum2[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Daum2 {
  id: number;
  name: string;
  slug: string;
  full_path: string;
  sku: string;
  excerpt: string;
  content: string;
  meta: string;
  old_id: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  review_data: any;
  regular_price: any;
  discount: any;
  price: any;
  sale_price: any;
  status: number;
  auto_sale: number;
  display: number;
  publish_date: string;
  extra: string;
  stock: number;
  order_count: number;
}
