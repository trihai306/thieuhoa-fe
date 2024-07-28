export interface ProductCategory {
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
  data: Product[];
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

export interface ProductDetail {
  product: Product;
  metaData: MetaData;
  faqs: Faq[];
  relateItems: RelateItem[];
  productViews: any[];
  categoryPost: CategoryPost;
  buyTogethers: any[];
  dataLayer: DataLayer;
  dataStock: DataStock;
  sizeChart: any;
  dataVoucher: DataVoucher[];
  block: any;
}

export interface Product {
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
  discount: number;
  price: any;
  sale_price: any;
  status: number;
  auto_sale: number;
  display: number;
  publish_date: string;
  extra: ProductExtra;
  stock: number;
  order_count: number;
  reviews_count: number;
  cateSlug: string;
  totalStock: number;
  arrayColor: string[];
  arraySize: any[];
  priceMin: number;
  originPriceMin: number;
  firstVariation: FirstVariation;
  numberStar: number;
  htmlStar: string;
  variations: Variation[];
  images: Image[];
  colors: Color[];
}

export interface ProductExtra {
  thumbnail: string;
  thumbnail2: string;
  list_gallery: string[];
  list_gallery_jpg: string[];
  data_color: DataColor[];
  discount: number;
  price: number;
  origin_price: number;
}

export interface DataColor {
  name: string;
  thumbnail: string;
  color_gallery: string[];
}

export interface FirstVariation {
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

export interface Image {
  id: number;
  type: any;
  is_main?: number;
  old_id: any;
  product_id: number;
  media_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  sort?: number;
  media: Media;
}

export interface Media {
  id: number;
  path: string;
  file_name: string;
  description: string;
  alt_text: string;
  name_search: string;
  folder_id: number;
  created_at: string;
  updated_at: string;
  type: number;
  status: number;
}

export interface Color {
  id: number;
  product_id: number;
  color: string;
  image_ids: string;
  created_at: string;
  updated_at: string;
  thumbnail: string;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  meta_canonical: string;
}

export interface Faq {
  id: number;
  category_id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

export interface RelateItem {
  id: number;
  name: string;
  slug: string;
  colors: Color[];
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
  discount: number;
  price: any;
  sale_price: any;
  status: number;
  auto_sale: number;
  display: number;
  publish_date: string;
  extra: any;
  stock: number;
  order_count: number;
  cateSlug: string;
  totalStock: number;
  arrayColor: string[];
  arraySize: any[];
  priceMin: number;
  originPriceMin: number;
  firstVariation: FirstVariation2;
  variations: Variation2[];
}

export interface FirstVariation2 {
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

export interface Variation2 {
  id: number;
  product_id: number;
  name: string;
  old_id: any;
  id_nhanh?: number;
  regular_price: number;
  sale_price: number;
  price: number;
  sku: string;
  attribute: any;
  stock?: number;
  color: string;
  size: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail?: string;
}

export interface CategoryPost {
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
}

export interface DataLayer {
  event: string;
  ecommerce: Ecommerce;
}

export interface Ecommerce {
  items: Item[];
}

export interface Item {
  item_id: string;
  item_name: string;
  currency: string;
  price: number;
  quantity: number;
  item_brand: string;
}

export interface DataStock {
  offline: Offline;
  online: any[];
}

export interface Offline {
  '1': N1;
  '7': N7;
  '15': N15;
  '28': N28;
  '30': N30;
}

export interface N1 {
  id: number;
  nhanh_id: number;
  name: string;
  city_nhanh_id: number;
  district_nhanh_id: number;
  ward_nhanh_id: number;
  address: string;
  status: number;
  type: number;
  created_at: string;
  updated_at: string;
  image: string;
  lat: any;
  long: any;
  map_url: string;
  last_order_time: number;
  slow_shipping_count: number;
  confirm_returned_count: number;
  total_avaiable: number;
}

export interface N7 {
  id: number;
  nhanh_id: number;
  name: string;
  city_nhanh_id: number;
  district_nhanh_id: number;
  ward_nhanh_id: number;
  address: string;
  status: number;
  type: number;
  created_at: string;
  updated_at: string;
  image: string;
  lat: any;
  long: any;
  map_url: string;
  last_order_time: number;
  slow_shipping_count: number;
  confirm_returned_count: number;
  total_avaiable: number;
}

export interface N15 {
  id: number;
  nhanh_id: number;
  name: string;
  city_nhanh_id: number;
  district_nhanh_id: number;
  ward_nhanh_id: number;
  address: string;
  status: number;
  type: number;
  created_at: string;
  updated_at: string;
  image: string;
  lat: any;
  long: any;
  map_url: string;
  last_order_time: any;
  slow_shipping_count: number;
  confirm_returned_count: number;
  total_avaiable: number;
}

export interface N28 {
  id: number;
  nhanh_id: number;
  name: string;
  city_nhanh_id: number;
  district_nhanh_id: number;
  ward_nhanh_id: number;
  address: string;
  status: number;
  type: number;
  created_at: string;
  updated_at: string;
  image: string;
  lat: any;
  long: any;
  map_url: string;
  last_order_time: any;
  slow_shipping_count: any;
  confirm_returned_count: any;
  total_avaiable: number;
}

export interface N30 {
  id: number;
  nhanh_id: number;
  name: string;
  city_nhanh_id: number;
  district_nhanh_id: number;
  ward_nhanh_id: number;
  address: string;
  status: number;
  type: number;
  created_at: string;
  updated_at: string;
  image: string;
  lat: any;
  long: any;
  map_url: string;
  last_order_time: any;
  slow_shipping_count: any;
  confirm_returned_count: any;
  total_avaiable: number;
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

export interface ReviewResponse {
  reviews: ReviewData;
}
export interface ReviewData {
  current_page: number;
  data: Review[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface Review {
  id: number;
  product_id: number;
  source_id: number;
  resource: number;
  content: string;
  rating_time: number;
  rate: number;
  user_name: string;
  user_image: string;
  images: string;
  videos: string;
  created_at: string;
  updated_at: string;
  htmlStar: string;
  human_time: string;
  normal_time: string;
}
export interface ReviewQuery {
  page: number;
  product_id: number;
  limit: number;
  type: number;
}
