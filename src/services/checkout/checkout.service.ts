import { CartType, DataVoucher, ResponseApplyCouponType } from '@/types/checkout';
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

  async addToCard(data: any) {
    return await this.http
      .post<ApiResponse<CartType>>(API_ENDPOINTS.ADD_TO_CART, data)
      .then((res) => res.data);
  }
  async checkPointByPhone(phone: number) {
    return await this.http
      .get<ApiResponse<number>>(API_ENDPOINTS.USER_POINT, {
        params: {
          phone,
        },
      })
      .then((res) => res.data);
  }
  async applyCoupon(code: string, phone: number) {
    return await this.http
      .post<ApiResponse<ResponseApplyCouponType>>(API_ENDPOINTS.APPLY_COUPON, {
        code,
        phone,
      })
      .then((res) => res.data);
  }
  async getCartNumber() {
    return await this.http
      .get<ApiResponse<{ total: number }>>(API_ENDPOINTS.CART_NUMBER)
      .then((res) => res.data);
  }
}

export const checkoutService = new CheckoutService();
