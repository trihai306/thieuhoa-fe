import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Image from '@/components/Image';
import { getAppLayout } from '@/components/layouts';
import { blogService } from '@/services/blog/blog.service';
import { NextPageWithLayout } from '@/types';
// Step 2: Define the `getServerSideProps` function
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Extract the slug from the URL parameters
  const { slug } = context.params;

  // Call your API using the slug. This is a placeholder URL.
  const res = await blogService.getBlogDetail(slug as string);

  // Return the fetched data as props

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
        <div className="banner">
          <div className="banner-desktop">
            <div className="banner-imgs-blog">
              <div className="banner-img">
                <a
                  href="https://thieuhoa.com.vn/vay-dam-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily"
                  target="_blank"
                  title=""
                  className="h-full w-full tw-relative tw-inline-block"
                >
                  <Image fill src="/v2/img/banner-small/banner-small-1.jpg" alt="" />
                </a>
              </div>
              <div className="banner-img">
                <a
                  href="https://thieuhoa.com.vn/ao-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily"
                  target="_blank"
                  title=""
                  className="h-full w-full tw-relative tw-inline-block"
                >
                  <Image fill src="/v2/img/banner-small/banner-small-2.jpg" alt="" />
                </a>
              </div>
              <div className="banner-img">
                <a
                  href="https://thieuhoa.com.vn/dam-du-tiec?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily"
                  target="_blank"
                  title=""
                  className="h-full w-full tw-relative tw-inline-block"
                >
                  <Image fill src="/v2/img/banner-small/banner-small-5.jpg" alt="" />
                </a>
              </div>
              <div className="banner-img">
                <a
                  href="https://thieuhoa.com.vn/tui-xach-nu?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily"
                  target="_blank"
                  title=""
                  className="h-full w-full tw-relative tw-inline-block"
                >
                  <Image fill src="/v2/img/banner-small/banner-small-4.jpg" alt="" />
                </a>
              </div>
              <div className="banner-img">
                <a
                  href="https://thieuhoa.com.vn/giay-trung-nien?utm_source=blogbanner&utm_medium=articleads&utm_campaign=daily"
                  target="_blank"
                  title=""
                  className="h-full w-full tw-relative tw-inline-block"
                >
                  <Image fill src="/v2/img/banner-small/banner-small-3.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
      <div className="blog-content " dangerouslySetInnerHTML={{ __html: post.content }} />
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
      <div className="blog-feedback">
        <div className="tw-flex-box">
          <p className="question tw-flex-full tw-flex-middle">Bạn có hài lòng bài viết này?</p>
          <div className="feedback-icon">
            <label className="positive">
              <svg
                width="2.5em"
                height="2.5em"
                viewBox="0 0 16 16"
                className="bi bi-emoji-smile"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
                ></path>
                <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
              </svg>
              <span>Hài lòng</span>{' '}
            </label>
          </div>
          <div className="feedback-icon">
            <label className="positive">
              <svg
                width="2.5em"
                height="2.5em"
                viewBox="0 0 16 16"
                className="bi bi-emoji-frown"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.498 4.498 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"
                ></path>
                <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
              </svg>
              <span>Không hài lòng</span>{' '}
            </label>
          </div>
        </div>
      </div>
      {products.length > 0 && (
        <div className="related-products">
          <h2 className="title">Gợi ý sản phẩm liên quan</h2>
          <div className="products-list">
            {products.map((product, index) => (
              <div className="product-item" key={index}>
                <a href={product.url} className="h-full w-full tw-relative tw-inline-block">
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
                <a href={relatePost.url} className="h-full w-full tw-relative tw-inline-block">
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
                <a href={relatedPost.url} className="h-full w-full tw-relative tw-inline-block">
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
