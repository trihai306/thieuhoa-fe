import { useMutation, useQuery } from '@tanstack/react-query';

import API_ENDPOINTS from '../endpoints';

import { checkoutService } from './checkout.service';

export const useCouponQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.BLOG_INDEX],
    queryFn: async () => {
      return checkoutService.getCouponList();
    },
  });
};
