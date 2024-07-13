import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';

import Image from '@/components/Image';
import { getAppLayout } from '@/components/layouts';
import BlogBanner from '@/modules/blog/components/BlogBanner';
import BlogFeedback from '@/modules/blog/components/BlogFeedback';
import { blogService } from '@/modules/blog/services/blog.service';
import { NextPageWithLayout } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const res = await blogService.getBlogDetail(slug as string);

  const { post, category, headlineArray, author, blogMenus, keywordRelatePosts } = res.data;

  return {
    props: {
      post,
      category,
      headlineArray,
      author,
      blogMenus,
      products: [],
      keywordRelatePosts,
      relatedPosts: [],
    }, // This will be passed to the page component as props
  };
};

const BlogDetail: NextPageWithLayout = ({
  post,
  category,
  headlineArray,
  author,
  blogMenus,
  products,
  keywordRelatePosts,
  relatedPosts,
}: any) => {
  const toggleNewscare = () => {
    console.log('Toggle newscare');
  };

  return (
    <div id="content-detail-blog" className="tw-mx-auto tw-max-w-screen-md">
      <div className="top-content">
        <h1 className="title">{post.title}</h1>
        <div className="bread-cumbs">
          <Link className="text-link" href="/">
            Thiều Hoa
          </Link>
          »
          <a className="text-link" href="/blog">
            Blog
          </a>
          {category && (
            <>
              »
              <a className="text-link" href={`/category/${category.full_path}`}>
                {category.title}
              </a>
            </>
          )}
          »<span className="text-base">{post.title}</span>
        </div>
        <div className="time-zone tw-flex tw-flex-row tw-justify-between ">
          <time className="fl">
            <div className="tw-relative tw-inline-block tw-h-4 tw-w-4">
              <Image width={10} height={10} src="/v2/img/svg/clock.svg" alt="time" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '12px', color: '#333', marginLeft: '2px' }}>
              {new Date(post.post_date).toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
              })}
              ,
              {new Date(post.post_date).toLocaleDateString('vi-VN', {
                weekday: 'long',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
          </time>
          <span className="google-news justify-end tw-flex tw-flex-1 tw-flex-row ">
            <div className="items-center rounded-full bg-gray-200 px-3 py-1 tw-flex">
              <span className="mobile-hidden">Theo dõi Thiều Hoa trên</span>
              <a
                href="https://news.google.com/publications/CAAqBwgKMLSY0gsw87PpAw?hl=vi&gl=VN&ceid=VN%3Avi"
                rel="noopener nofollow"
                target="_blank"
                className="google-news-link h-[45px] w-[200px] tw-relative tw-inline-block "
              >
                <Image
                  fill
                  alt="Thiều Hoa Google News"
                  className="google-news-img"
                  src="/v2/img/google-news.png"
                />
              </a>
            </div>
          </span>
        </div>
        <div className="clear-both"></div>
        {/* Banner */}
        <BlogBanner />

        <div
          className="text blog-description"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </div>
      {headlineArray && headlineArray.length > 0 && (
        <div className="newscare">
          <div>
            <b>Mục lục bài viết </b>
            <span className="toc_toggle">
              [
              <a
                className="icon-list newscare-icon"
                onClick={toggleNewscare}
                href="javascript:void(0)"
              >
                Ẩn
              </a>
              ]
            </span>
          </div>
          <ul className="newscare-list">
            {headlineArray.map((headline, index) => {
              let className = '';
              if (headline.name === 'h3') className = 'pl-15x';
              if (headline.name === 'h4') className = 'pl-25x';
              if (headline.name === 'h2') className = '';
              return (
                <li key={index}>
                  <a className={className} href={`#${headline.id}`}>
                    {headline.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ReactMarkdown
        className={'text blog-description'}
        rehypePlugins={[rehypeRaw, remarkGfm]}
        components={{
          img: (props) => {
            return <img src={props['data-src']} />;
          },
        }}
      >
        {post.content}
      </ReactMarkdown>

      {author && (
        <div style={{ display: 'block' }}>
          <span style={{ float: 'right' }}>
            <a
              className="text-base"
              style={{ fontSize: '16px', fontWeight: 'bold' }}
              href={`/author/${author.slug}`}
            >
              {author.name}
            </a>
          </span>
        </div>
      )}
      {author && <div style={{ clear: 'both' }}></div>}
      {blogMenus.length > 0 && (
        <div className="tag-list">
          {blogMenus.map((blogMenu, index) => (
            <div className="tag-item" key={index}>
              <a href={blogMenu.url}>{blogMenu.text}</a>
            </div>
          ))}
        </div>
      )}
      <BlogFeedback />
      {products.length > 0 && (
        <div className="related-products">
          <h2 className="title">Gợi ý sản phẩm liên quan</h2>
          <div className="products-list">
            {products.map((product, index) => (
              <div className="product-item" key={index}>
                <a href={product.url} className="tw-relative tw-inline-block tw-h-full tw-w-full">
                  <Image fill src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a className="product-name" href={product.url}>
                    {product.name}
                  </a>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {keywordRelatePosts && (
        <div className="related-posts">
          <h2 className="title">Có thể bạn quan tâm</h2>
          <div className="posts-list">
            {keywordRelatePosts.map((relatePost, index) => (
              <div className="post-item" key={index}>
                <a
                  href={relatePost.url}
                  className="tw-relative tw-inline-block tw-h-full tw-w-full"
                >
                  <Image fill src={relatePost.image} alt={relatePost.title} />
                </a>
                <div className="post-info">
                  <a className="post-title" href={relatePost.url}>
                    {relatePost.title}
                  </a>
                  <p className="post-date">
                    {new Date(relatePost.date).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {relatedPosts && (
        <div className="related-posts">
          <h2 className="title">Bài viết liên quan</h2>
          <div className="posts-list">
            {relatedPosts.map((relatedPost, index) => (
              <div className="post-item" key={index}>
                <a
                  href={relatedPost.url}
                  className="tw-relative tw-inline-block tw-h-full tw-w-full"
                >
                  <Image fill src={relatedPost.image} alt={relatedPost.title} />
                </a>
                <div className="post-info">
                  <a className="post-title" href={relatedPost.url}>
                    {relatedPost.title}
                  </a>
                  <p className="post-date">
                    {new Date(relatedPost.date).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
