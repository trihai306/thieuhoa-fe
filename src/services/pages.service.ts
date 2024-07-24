import { APP_API_URL } from '@/common/constants';
import { ApiResponse } from '@/types/common';
import { ResponseHomePageType } from '@/types/home';

import { BaseService } from './base.service';
import API_ENDPOINTS from './endpoints';

class PagesService extends BaseService {
  async home() {
    return this.http
      .get<ApiResponse<ResponseHomePageType>>(`${APP_API_URL}`)
      .then((res) => res.data);
  }
  async getCheckoutSuccess(params: any) {
    return await this.http
      .get<ApiResponse<any>>(API_ENDPOINTS.SUCCESS, { params })
      .then((res) => res.data);
  }
}

export const pagesService = new PagesService();
