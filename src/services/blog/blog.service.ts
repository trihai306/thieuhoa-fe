import { APP_API_URL } from '@/common/constants';
import { BlogData, BlogDetail } from '@/types/blog';
import { ApiResponse } from '@/types/common';

import { BaseService } from '../base.service';
import API_ENDPOINTS from '../endpoints';

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
