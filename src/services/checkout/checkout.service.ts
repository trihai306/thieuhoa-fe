import { CartType, DataVoucher } from '@/types/checkout';
import { ApiResponse } from '@/types/common';

import { BaseService } from '../base.service';
import API_ENDPOINTS from '../endpoints';
import requestCart from '../request-cart';

class CheckoutService extends BaseService {
  http = requestCart;
  async getCouponList() {
    return await this.http
      .get<ApiResponse<DataVoucher[]>>(API_ENDPOINTS.GET_COUPON)
      .then((res) => res.data);
  }
  async getDataCart() {
    return await this.http.get<ApiResponse<CartType>>(API_ENDPOINTS.CART).then((res) => res.data);
  }
}

export const checkoutService = new CheckoutService();
