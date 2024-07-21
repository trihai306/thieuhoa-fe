import { DataVoucher, ResponseApplyCouponType, ResponseShippingType } from '@/types/checkout';
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
  async checkPointByPhone(phone: string) {
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
  async getShipInfo() {
    return await this.http
      .get<ApiResponse<ResponseShippingType>>(API_ENDPOINTS.GET_SHIP)
      .then((res) => res.data);
  }
  async checkout(params: any) {
    return await this.http
      .post<ApiResponse<any>>(API_ENDPOINTS.CHECKOUT, params)
      .then((res) => res.data);
  }
}

export const checkoutService = new CheckoutService();
