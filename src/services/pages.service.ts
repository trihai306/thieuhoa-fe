import { APP_API_URL } from '@/common/constants';
import { ApiResponse } from '@/types/common';

import { BaseService } from './base.service';

class PagesService extends BaseService {
  async home() {
    return this.http.get<ApiResponse<any>>(`${APP_API_URL}`).then((res) => res.data);
  }
}

export const pagesService = new PagesService();
