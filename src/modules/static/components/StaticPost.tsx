import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { postService } from '../services/post/post.service';
import { DataView, MetaData, StaticPage } from '../types';
export type StaticPostProps = {
  slug: string;
  initialData?: any;
};

const StaticPost: React.FC<StaticPostProps> = ({ slug, initialData }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['static', slug],
    // initialData: initialData,
    queryFn: async () => {
      return await postService.getPost(slug);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>{data.data.metaData.meta_og_title}</title>
        <meta name="description" content={data.data.metaData.meta_description} />
        <meta property="og:title" content={data.data.metaData.meta_description} />
        <meta property="og:description" content={data.data.metaData.meta_description} />
        <meta property="og:image" content={data.data.metaData.meta_og_image} />
        <meta property="og:url" content={data.data.metaData.meta_og_url} />
      </Head>
      <div className="tw-mx-auto tw-max-w-[900px]">
        <div className="page-header">
          <div className="container" style={{ maxWidth: 900 }}>
            <h1 className="page-header__content">{data.data.staticPage.title}</h1>
          </div>
        </div>
        <div className="container">
          <ReactMarkdown
            className={'text blog-description'}
            rehypePlugins={[rehypeRaw, remarkGfm]}
            components={{
              img: (props) => {
                return <img src={props['data-src']} />;
              },
            }}
          >
            {data.data.dataView.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};
export default StaticPost;
