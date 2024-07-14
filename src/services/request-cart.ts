import axios from 'axios';
import Cookies from 'js-cookie';

import { APP_API_CART_URL } from '@/common/constants';
import { StorageKeys } from '@/common/enums';

const requestCart = axios.create({
  baseURL: APP_API_CART_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

requestCart.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get(StorageKeys.ACCRESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

requestCart.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default requestCart;
