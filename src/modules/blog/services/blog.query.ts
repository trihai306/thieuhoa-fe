import { useQuery } from '@tanstack/react-query';

import API_ENDPOINTS from '@/services/endpoints';

import { blogService } from './blog.service';

export const useBlogQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.BLOG_INDEX],
    queryFn: async () => {
      return blogService.getBlog();
    },
  });
};
