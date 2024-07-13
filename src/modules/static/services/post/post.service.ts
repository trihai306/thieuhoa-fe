import { ApiResponse } from '@/types/common';

import { BaseService } from '../../../../services/base.service';
import { ProductPost, StaticPost } from '../../types';

class PostService extends BaseService {
  async getPost(slug: string) {
    return await this.http.get<ApiResponse<StaticPost | ProductPost>>(slug).then((res) => res.data);
  }
}

export const postService = new PostService();
