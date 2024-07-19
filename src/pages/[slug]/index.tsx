import { GetServerSideProps } from 'next';

import { getAppLayout } from '@/components/layouts';
import ProductCategory from '@/modules/product/pages/ProductCategory';
import StaticPost from '@/modules/static/components/StaticPost';
import { postService } from '@/modules/static/services/post/post.service';
import { NextPageWithLayout } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug, page } = context.params;
  const res = await postService.getPost(slug as string);
  if (Object.keys(res.data).includes('staticPage')) {
    return {
      props: {
        slug: slug,
        staticPage: res,
      },
    };
  }

  return {
    props: {
      slug: slug,
      productCategory: res,
      page: page ?? 1,
    },
  };
};

const BlogDetail: NextPageWithLayout = ({ slug, productCategory, staticPage, page }) => {
  return (
    <div>
      {productCategory && <ProductCategory slug={slug} initialData={productCategory} page={page} />}
      {staticPage && <StaticPost slug={slug} initialData={staticPage} />}
    </div>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
