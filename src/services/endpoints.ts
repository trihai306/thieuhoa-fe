const API_ENDPOINTS = {
  MENU: '/menu',
  HOME: '/',
  DOWNLOAD: '/download',
  USER_LOGIN: '/dang-nhap',
  PHONE_LOGIN: '/phone_login',
  USER_OTP: '/user-otp',
  USER_OTP_SUBMIT: '/user-otp',
  GOOGLE_LOGIN: '/google_login',
  USER_POST_LOGIN: '/dang-nhap',
  USER_POST_REGISTER: '/dang-ki',
  STORE_LIST: '/he-thong-cua-hang',
  AUTHOR_DETAIL: '/tac-gia/{slug}',
  SEARCH_POINT: '/tra-cuu-diem',
  POST_SEARCH_POINT: '/tra-cuu-diem',
  MISA_CALLBACK: '/misa/callback',
  NHANH_WEBHOOKS: '/nhanh/webhooks',
  NHANH_GET_WEBHOOKS: '/nhanh/webhooks',
  SEARCH: '/search',
  CHECKOUT_SUCCESS: '/checkout_success',
  CART_INDEX: '/cart',
  CHECKOUT_INDEX: '/checkout',
  BLOG_INDEX: '/blog',
  BLOG_DETAIL: '/blog',
  NEWEST_PRODUCT: '/san-pham-moi',
  BLOG_DETAIL_AMP: '/amp/blog/{slug}',
  CATEGORY_PAGE: '/{cateSlug}/page/{page}',
  CATEGORY_AND_POST: '/{slug}',
  GE_TAG_DETAIL: '/tags/{slug}',
  PRODUCT_DETAIL: '/{cateSlug}/{slug}',
  GET_COUPON: '/get-coupon',
  USER_POINT: 'get-customer-points',
  APPLY_COUPON: '/cart/apply-coupon',
  GET_PRODUCTS: '/get-products',
  GET_SHIP: '/get-ship-info',
  CHECKOUT: '/checkout',
  SUCCESS: '/checkout_success',

  //Home
  HOME_VOUCHER: '/home/data-voucher',
  HOME_POST: '/home/posts',
  HOME_BANNER: '/home/banners',
  HOME_LATEST_PRODUCT: '/home/latest-products',
  HOME_BEST_SELLER: '/home/best-seller-products',
  HOME_CATEGORY_DATA: '/home/category-data',
  HOME_SALE_OFF: '/home/sale-off-products',

  //PRODUCT REVIEW
  PRODUCT_REVIEW: 'product/reviews',
};

export default API_ENDPOINTS;
