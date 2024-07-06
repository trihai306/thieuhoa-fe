import { APP_API_URL } from '@/common/constants';
import { ApiResponse } from '@/types/common';

import { BaseService } from './base.service';

class LayoutService extends BaseService {
  async menu() {
    return this.http.get<ApiResponse<any>>(`${APP_API_URL}/menu`).then((res) => res.data);
  }
}

export const layoutService = new LayoutService();
