import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import Image from '@/components/Image';
import { getAppLayout } from '@/components/layouts';
import Link from '@/components/Link';
import Meta from '@/components/Meta';
import { cn } from '@/lib/utils';
import BlogBanner from '@/modules/blog/components/BlogBanner';
import BlogFeedback from '@/modules/blog/components/BlogFeedback';
import { blogService } from '@/modules/blog/services/blog.service';
import { NextPageWithLayout } from '@/types';
import { formatNumber } from '@/utils/number';

const style = css`
  #content-detail-blog .newscare {
    background: #f1fbff;
    border: 0.5px solid #54b8ff;
    border-radius: 8px;
    padding: 12px 18px 10px;
    display: grid;
    margin: 10px 0;
  }
  #content-detail-blog .newscare ul {
    padding-left: 12px;
  }
  #content-detail-blog .newscare a {
    color: #0064c2;
  }
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const res = await blogService.getBlogDetail(slug as string);

  const { post, category, headlineArray, author, blogMenus, keywordRelatePosts, metaData } =
    res.data;

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
      metaData,
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
  metaData,
}: any) => {
  const toggleNewscare = () => {
    console.log('Toggle newscare');
  };

  return (
    <div css={style}>
      <Meta {...metaData} />

      <div id="content-detail-blog" className="tw-mx-auto tw-max-w-screen-md">
        <div className="top-content">
          <h1 className="title">{post.title}</h1>
          <div className="bread-cumbs">
            <Link className="text-link" href="/">
              Thiều Hoa
            </Link>
            <span className="tw-mx-3">»</span>
            <Link className="text-link" href="/blog">
              Blog
            </Link>
            {category && (
              <>
                <span className="tw-mx-3">»</span>
                <Link className="text-link" href={`/category/${category.full_path}`}>
                  {category.title}
                </Link>
              </>
            )}
            <span className="tw-mx-3">»</span>
            <span className="text-base">{post.title}</span>
          </div>
          <div className="time-zone tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-x-1">
            <time className="fl tw-flex tw-items-center tw-gap-x-1">
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
                <Link
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
                </Link>
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
                <Link
                  className="icon-list newscare-icon"
                  onClick={toggleNewscare}
                  href="javascript:void(0)"
                >
                  Ẩn
                </Link>
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
                    <Link className={cn(className, 'tw-text-blue-500')} href={`#${headline.id}`}>
                      {headline.text}
                    </Link>
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
            a: (props) => {
              return (
                <Link href={props.href ?? ''} style={{ color: '#0064c2' }}>
                  {props.children}
                </Link>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>

        {author && (
          <div style={{ display: 'block' }}>
            <span style={{ float: 'right' }}>
              <Link
                className="text-base"
                style={{ fontSize: '16px', fontWeight: 'bold' }}
                href={`/author/${author.slug}`}
              >
                {author.name}
              </Link>
            </span>
          </div>
        )}
        {author && <div style={{ clear: 'both' }}></div>}
        {blogMenus.length > 0 && (
          <div className="tag-list">
            {blogMenus.map((blogMenu, index) => (
              <div className="tag-item" key={index}>
                <Link href={blogMenu.url}>{blogMenu.text}</Link>
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
                  <Link
                    href={product.url}
                    className="tw-relative tw-inline-block tw-h-full tw-w-full"
                  >
                    <Image fill src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-info">
                    <Link className="product-name" href={product.url}>
                      {product.name}
                    </Link>
                    <p className="product-price">{formatNumber(product.price)}</p>
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
                  <Link
                    href={relatePost.url}
                    className="tw-relative tw-inline-block tw-h-full tw-w-full"
                  >
                    <Image fill src={relatePost.image} alt={relatePost.title} />
                  </Link>
                  <div className="post-info">
                    <Link className="post-title" href={relatePost.url}>
                      {relatePost.title}
                    </Link>
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
                  <Link
                    href={relatedPost.url}
                    className="tw-relative tw-inline-block tw-h-full tw-w-full"
                  >
                    <Image fill src={relatedPost.image} alt={relatedPost.title} />
                  </Link>
                  <div className="post-info">
                    <Link className="post-title" href={relatedPost.url}>
                      {relatedPost.title}
                    </Link>
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
    </div>
  );
};
BlogDetail.getLayout = getAppLayout;
export default BlogDetail;
