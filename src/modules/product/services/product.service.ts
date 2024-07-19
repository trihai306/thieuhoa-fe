import { cloneDeepWith, isString } from 'lodash';

import { BaseService } from '@/services/base.service';
import API_ENDPOINTS from '@/services/endpoints';
import { ApiResponse } from '@/types';

import { Product, ProductCategory, ProductDetail } from '../types';

class ProductService extends BaseService {
  async getCategory(data: { slug: string; page?: number }) {
    return await this.http
      .get<ApiResponse<ProductCategory>>(data.slug, {
        params: {
          page: data.page,
        },
      })
      .then((res) => res.data);
  }

  async search(data: { keyword: string; page?: number }) {
    return await this.http
      .get<ApiResponse<ProductCategory>>(`/search`, { params: data })
      .then((res) => {
        return cloneDeepWith(res.data, (value, key) => {
          if (key === 'extra' && isString(value)) {
            return JSON.parse(value);
          }
        }) as ApiResponse<ProductCategory>;
      });
  }

  async getProductDetail(slug: string) {
    return await this.http.get<ApiResponse<ProductDetail>>(slug).then((res) => {
      return cloneDeepWith(res.data, (value, key) => {
        if (key === 'extra' && isString(value)) {
          return JSON.parse(value);
        }
      }) as ApiResponse<ProductDetail>;
    });
  }
  async getProducts(ids: number[]) {
    return await this.http
      .post<ApiResponse<Product[]>>(API_ENDPOINTS.GET_PRODUCTS, {
        ids,
      })
      .then((res) => res.data);
  }
}

export const productService = new ProductService();
