import { GetServerSideProps } from 'next';

import { getAppLayout } from '@/components/layouts';
import ProductSearch from '@/modules/product/pages/Search';
import { productService } from '@/modules/product/services/product.service';
import { NextPageWithLayout } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { keyword, page } = context.query;

  const res = await productService.search({
    keyword: (keyword as string) ?? '',
    page: page ?? 1,
  });

  return {
    props: {
      keyword: keyword,
      productCategory: res,
    },
  };
};

const BlogDetail: NextPageWithLayout = ({ keyword, productCategory }) => {
  return (
    <>
      <ProductSearch keyword={keyword} initialData={productCategory} />
    </>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
