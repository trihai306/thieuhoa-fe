import { BaseService } from '@/services/base.service';
import { ApiResponse } from '@/types';

import { ProductCategory } from '../types';

class ProductService extends BaseService {
  async getCategory(slug: string) {
    return await this.http.get<ApiResponse<ProductCategory>>(slug).then((res) => res.data);
  }

  async getProductDetail(slug: string) {
    return await this.http.get<ApiResponse<ProductCategory>>(slug).then((res) => res.data);
  }
}

export const productService = new ProductService();
