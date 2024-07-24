import { DataVoucher } from '@/types/checkout';
import { ApiResponse } from '@/types/common';
import { Banner, CategoryDaum } from '@/types/home';

import { BaseService } from '../base.service';
import API_ENDPOINTS from '../endpoints';

class HomeService extends BaseService {
  async getVoucherList() {
    const res = await this.http
      .get<ApiResponse<DataVoucher[]>>(API_ENDPOINTS.HOME_VOUCHER)
      .then((res) => res.data);
    return res.data;
  }
  async getCategoryData() {
    return await this.http
      .get<ApiResponse<CategoryDaum[]>>(API_ENDPOINTS.HOME_CATEGORY_DATA)
      .then((res) => res.data);
  }
  async getBanners() {
    return await this.http
      .get<ApiResponse<Banner[]>>(API_ENDPOINTS.HOME_BANNER)
      .then((res) => res.data);
  }
}

export const homeService = new HomeService();
