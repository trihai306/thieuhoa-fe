import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getAppLayout } from '@/components/layouts';
import { postService } from '@/services/post/post.service';
import { NextPageWithLayout } from '@/types';
import { DataView, MetaData, StaticPage } from '@/types/post';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const res = await postService.getPost(slug as string);

  const { staticPage, metaData, dataView, hideHeader } = res.data;

  return {
    props: {
      staticPage,
      metaData,
      dataView,
      hideHeader,
    }, // This will be passed to the page component as props
  };
};

export type BlogDetailProps = {
  staticPage: StaticPage;
  metaData: MetaData;
  dataView: DataView;
  hideHeader: boolean;
};

const BlogDetail: NextPageWithLayout<BlogDetailProps> = ({
  staticPage,
  metaData,
  dataView,
  hideHeader,
}) => {
  return (
    <>
      <Head>
        <title>{metaData.meta_og_title}</title>
        <meta name="description" content={metaData.meta_description} />
        <meta property="og:title" content={metaData.meta_description} />
        <meta property="og:description" content={metaData.meta_description} />
        <meta property="og:image" content={metaData.meta_og_image} />
        <meta property="og:url" content={metaData.meta_og_url} />
      </Head>
      <div className="mx-auto max-w-screen-lg">
        <div className="page-header">
          <div className="container" style={{ maxWidth: 900 }}>
            <h1 className="page-header__content">{staticPage.title}</h1>
          </div>
        </div>
        <div className="container">
          <div className="prose" dangerouslySetInnerHTML={{ __html: dataView.content }}></div>
        </div>
      </div>
    </>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
