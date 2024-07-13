import { BaseService } from '@/services/base.service';
import API_ENDPOINTS from '@/services/endpoints';
import { ApiResponse } from '@/types/common';

import { BlogData, BlogDetail } from '../types';

class BlogService extends BaseService {
  async getBlog() {
    return await this.http
      .get<ApiResponse<BlogData>>(API_ENDPOINTS.BLOG_INDEX)
      .then((res) => res.data);
  }

  async getBlogDetail(slug: string) {
    return await this.http
      .get<ApiResponse<BlogDetail>>(`${API_ENDPOINTS.BLOG_DETAIL}/${slug}`)
      .then((res) => res.data);
  }
}

export const blogService = new BlogService();
