import { BlogData } from '@/types/blog';
import { ApiResponse } from '@/types/common';
import { StaticPost } from '@/types/post';

import { BaseService } from '../base.service';

class PostService extends BaseService {
  async getPost(slug: string) {
    return await this.http.get<ApiResponse<StaticPost>>(slug).then((res) => res.data);
  }
}

export const postService = new PostService();
