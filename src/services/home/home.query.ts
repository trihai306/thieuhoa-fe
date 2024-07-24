import { useMutation, useQuery } from '@tanstack/react-query';

import API_ENDPOINTS from '../endpoints';

import { homeService } from './home.service';

export const useVoucherQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.HOME_VOUCHER],
    queryFn: async () => {
      return await homeService.getVoucherList();
    },
  });
};

export const useCategoryDataQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.HOME_CATEGORY_DATA],
    queryFn: async () => {
      const res = await homeService.getCategoryData();
      return res.data;
    },
  });
};

export const useBannerQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.HOME_BANNER],
    queryFn: async () => {
      const res = await homeService.getBanners();
      return res.data;
    },
  });
};
