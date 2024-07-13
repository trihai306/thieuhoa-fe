import { cloneDeepWith, isString } from 'lodash';

import { BaseService } from '@/services/base.service';
import { ApiResponse } from '@/types';

import { ProductCategory, ProductDetail } from '../types';

class ProductService extends BaseService {
  async getCategory(slug: string) {
    return await this.http.get<ApiResponse<ProductCategory>>(slug).then((res) => res.data);
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
}

export const productService = new ProductService();
