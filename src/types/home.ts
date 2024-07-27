import { SchemaDataType } from './seo-schema-type';

export interface ResponseHomePageType {
  metaData: MetaData;
  schemaData: Record<string, SchemaDataType>;
  block?: any;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  meta_canonical: string;
}

export interface Banner {
  id: number;
  image_desktop: string;
  image_mobile: string;
  url: string;
  sort: any;
  created_at: string;
  updated_at: string;
}

export interface LatestProduct {
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
  discount: any;
  price?: number;
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
  arraySize: ArraySize;
  originPriceMin: number;
  priceMin: number;
  dataColor: DataColor[];
  variations: Variation[];
}

export interface ArraySize {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

export interface DataColor {
  name: string;
  thumbnail: string;
  color_gallery: string[];
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
  size: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail: string;
}

export interface Post {
  title: string;
  slug: string;
  image: string;
  post_date: string;
  status: number;
}

export interface BestsellerProduct {
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
  review_data?: string;
  regular_price: any;
  discount?: number;
  price: number;
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
  arraySize: ArraySize2;
  originPriceMin: number;
  priceMin: number;
  dataColor: DataColor2[];
  variations: Variation2[];
}

export interface ArraySize2 {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

export interface DataColor2 {
  name: string;
  thumbnail?: string;
  color_gallery: string[];
}

export interface Variation2 {
  id: number;
  product_id: number;
  name: string;
  old_id: any;
  id_nhanh: number;
  regular_price: number;
  sale_price?: number;
  price: number;
  sku: string;
  attribute: any;
  stock: number;
  color: string;
  size: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail: string;
}

export interface SchemaData {
  organization: Organization;
  breadcrumbList: BreadcrumbList;
}

export interface Organization {
  '@context': string;
  '@type': string;
  '@id': string;
  Url: string;
  Name: string;
  Logo: Logo;
  ContactPoint: ContactPoint[];
  SameAs: string[];
}

export interface Logo {
  '@type': string;
  Url: string;
}

export interface ContactPoint {
  '@type': string;
  telephone: string;
  contactType: string;
  areaServed: string;
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  Name: string;
  itemListElement: ItemListElement[];
}

export interface ItemListElement {
  '@type': string;
  position: number;
  item: Item;
}

export interface Item {
  '@type': string;
  name: string;
  '@id': string;
  itemListElement: ItemListElement2[];
}

export interface ItemListElement2 {
  '@type': string;
  position: number;
  item: Item2;
}

export interface Item2 {
  name: string;
  '@id': string;
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

export interface CategoryDaum {
  id: number;
  name: string;
  slug: string;
  image: string;
  parent_id?: number;
  last_parent_id?: number;
  meta: string;
  product_count: number;
  description: string;
  created_at: string;
  updated_at: string;
  banner: string;
  html: string;
  banner_link?: string;
  size_chart?: string;
  sort_type: number;
  dataProduct: DataProduct[];
}

export interface DataProduct {
  id: number;
  extra: string;
  slug: string;
  publish_date?: string;
  full_path: string;
  name: string;
  cateSlug: string;
  arrayColor: string[];
  arraySize: any;
  originPriceMin: number;
  priceMin: number;
  dataColor: DataColor3[];
  variations: Variation3[];
  discount?: number;
}

export interface DataColor3 {
  name: string;
  thumbnail: string;
  color_gallery: string[];
}

export interface Variation3 {
  id: number;
  product_id: number;
  name: string;
  old_id: any;
  id_nhanh: number;
  regular_price: number;
  sale_price?: number;
  price?: number;
  sku: string;
  attribute: any;
  stock: number;
  color?: string;
  size?: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail?: string;
}

export interface SaleOffProduct {
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
  discount: any;
  price: any;
  sale_price: any;
  status: number;
  auto_sale: number;
  display: number;
  publish_date: string;
  extra: string;
  stock: number;
  order_count: any;
  cateSlug: string;
  arrayColor: string[];
  arraySize: ArraySize3;
  originPriceMin: number;
  priceMin: number;
  dataColor: DataColor4[];
  variations: Variation4[];
}

export interface ArraySize3 {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

export interface DataColor4 {
  name: string;
  thumbnail: string;
  color_gallery: string[];
}

export interface Variation4 {
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
  size: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  stock_detail: string;
}
