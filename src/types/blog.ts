export interface BlogData {
  metaData: MetaData;
  fashionKnowledges: FashionKnowledge[];
  mixFashionTips: MixFashionTip[];
  recentPosts: RecentPost[];
  popularPosts: PopularPost[];
  geCategories: GeCategory[];
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
}

export interface FashionKnowledge {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

export interface MixFashionTip {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

export interface RecentPost {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

export interface PopularPost {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

export interface GeCategory {
  id: number;
  name: string;
  slug: string;
  image: any;
  status: number;
  current_page: number;
  meta: any;
  description: any;
  origin_id: number;
  created_at: any;
  updated_at: string;
  posts: any[];
}

/// # Blogdetail

export interface BlogDetail {
  post: Post;
  blogMenus: any[];
  metaData: MetaData;
  schemaData: SchemaData;
  category: Category2;
  headlineArray: HeadlineArray[];
  author: Author4;
  keywordRelatePosts: KeywordRelatePost[];
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  description: string;
  status: number;
  post_date: string;
  created_at: string;
  updated_at: string;
  products_id: string;
  extra: string;
  admin_id: any;
  author_id: number;
  redirect_flag: number;
  is_on_homepage: number;
  author: Author;
  related_post_type1: RelatedPostType1;
  related_posts_type2: RelatedPostsType2[];
  categories: Category[];
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  image: any;
  position: string;
  status: number;
  description: string;
  experience: any;
  rating: any;
  created_at: string;
  updated_at: string;
}

export interface RelatedPostType1 {
  id: number;
  post_id: number;
  related_id: number;
  type: number;
  created_at: string;
  updated_at: string;
  post: Post2;
}

export interface Post2 {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  description: string;
  status: number;
  post_date: string;
  created_at: string;
  updated_at: string;
  products_id: string;
  extra: string;
  admin_id: any;
  author_id: number;
  redirect_flag: number;
  is_on_homepage: number;
}

export interface RelatedPostsType2 {
  id: number;
  post_id: number;
  related_id: number;
  type: number;
  created_at: string;
  updated_at: string;
  post: Post3;
}

export interface Post3 {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  description: string;
  status: number;
  post_date: string;
  created_at: string;
  updated_at: string;
  products_id: string;
  extra: string;
  admin_id: any;
  author_id: number;
  redirect_flag: number;
  is_on_homepage: number;
}

export interface Category {
  id: number;
  title: string;
  full_path: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

export interface Pivot {
  post_id: number;
  category_id: number;
}

export interface MetaData {
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string;
  meta_og_title: string;
  meta_canonical: string;
  meta_amphtml: string;
}

export interface SchemaData {
  newsArticle: NewsArticle;
  webPage: WebPage;
  organization: Organization;
  breadcrumbList: BreadcrumbList;
}

export interface NewsArticle {
  '@context': string;
  '@type': string;
  MainEntityOfPage: MainEntityOfPage;
  Headline: string;
  Image: Image;
  Description: string;
  KeyWords: any;
  Inlanguage: string;
  DatePublished: string;
  DateModified: string;
  Publisher: Publisher;
  Author: Author2;
}

export interface MainEntityOfPage {
  '@type': string;
  '@id': string;
}

export interface Image {
  '@type': string;
  Url: string;
  Width: number;
  Height: number;
}

export interface Publisher {
  '@id': string;
  Name: string;
  Logo: Logo;
}

export interface Logo {
  '@type': string;
  Url: string;
}

export interface Author2 {
  '@type': string;
  Name: string;
  url: string;
  MemberOf: MemberOf;
}

export interface MemberOf {
  '@id': string;
}

export interface WebPage {
  '@context': string;
  '@type': string;
  '@id': string;
  Url: string;
  InLanguage: string;
  Name: string;
  DatePublished: string;
  DateModified: string;
  Publisher: Publisher2;
  Description: string;
  Author: Author3;
  CommentCount: number;
  IsPartOf: IsPartOf;
}

export interface Publisher2 {
  '@type': string;
  '@id': string;
}

export interface Author3 {
  '@type': string;
  '@id': string;
  url: string;
  Name: string;
}

export interface IsPartOf {
  '@id': string;
}

export interface Organization {
  '@context': string;
  '@type': string;
  Url: string;
  Name: string;
  Logo: Logo2;
  ContactPoint: ContactPoint[];
  SameAs: string[];
}

export interface Logo2 {
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

export interface Category2 {
  id: number;
  title: string;
  full_path: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot2;
}

export interface Pivot2 {
  post_id: number;
  category_id: number;
}

export interface HeadlineArray {
  outerHtml: string;
  html: string;
  text: string;
  name: string;
  id: string;
  new_html: string;
}

export interface Author4 {
  id: number;
  name: string;
  slug: string;
  image: any;
  position: string;
  status: number;
  description: string;
  experience: any;
  rating: any;
  created_at: string;
  updated_at: string;
}

export interface KeywordRelatePost {
  slug: string;
  image: string;
  title: string;
}
