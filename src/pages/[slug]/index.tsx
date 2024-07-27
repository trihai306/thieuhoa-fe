import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { getAppLayout } from '@/components/layouts';
import Meta from '@/components/Meta';
import ProductCategory from '@/modules/product/pages/ProductCategory';
import StaticPost from '@/modules/static/components/StaticPost';
import { postService } from '@/modules/static/services/post/post.service';
import { NextPageWithLayout } from '@/types';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params, query } = context;
  const slug = params?.slug ?? '';
  const page = query?.page ?? 1;
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
  const { metaData, schemaData } = productCategory.data;
  return (
    <div>
      <Meta {...metaData} schemaData={schemaData} />
      {productCategory && <ProductCategory slug={slug} initialData={productCategory} page={page} />}
      {staticPage && <StaticPost slug={slug} initialData={staticPage} />}
    </div>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
