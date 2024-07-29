import { cloneDeepWith, isString } from 'lodash';

import { BaseService } from '@/services/base.service';
import API_ENDPOINTS from '@/services/endpoints';
import requestCart from '@/services/request-cart';
import { ApiResponse } from '@/types';

import { Product, ProductCategory, ProductDetail, ReviewQuery, ReviewReponse } from '../types';

class ProductService extends BaseService {
  httpCart = requestCart;
  async getCategory(slug: string, { page, ...query }: { page?: number }) {
    return await this.http
      .get<ApiResponse<ProductCategory>>(slug, {
        params: {
          page: page,
          ...query,
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
  async getReview(params: ReviewQuery) {
    return await this.httpCart
      .get<ApiResponse<ReviewReponse>>(API_ENDPOINTS.PRODUCT_REVIEW, {
        params,
      })
      .then((res) => res.data);
  }
}

export const productService = new ProductService();
