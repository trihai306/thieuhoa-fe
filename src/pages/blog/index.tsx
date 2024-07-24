import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Image from '@/components/Image';
import { getAppLayout } from '@/components/layouts';
import { blogService } from '@/modules/blog/services/blog.service';
import Meta from '@/components/Meta';
// Define the getServerSideProps function
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data here. This is a placeholder example.
  const res = await blogService.getBlog();

  // Return the fetched data as props
  return {
    props: {
      data: res,
    },
  };
};

const BlogPage = ({ data }) => {
  // const { data, isLoading } = useBlogQuery();
  const recentPostList = data?.data.recentPosts || [];
  const popularPostList = data?.data.popularPosts || [];
  const fashionKnowledgeList = data?.data.fashionKnowledges ?? [];
  const mixFashionTipList = data?.data.mixFashionTips ?? [];
  const metaData = data?.data.metaData;
  return (
    <>
      <Meta {...metaData} />
      <div id="content-blog">
        <div className="top-content">
          <div className="bread-cumbs">
            <Link className="text-base" href="/">
              Thiều Hoa
            </Link>{' '}
            <span className="tw-mx-3">»</span>
            <Link className="tw-text-base" href="/blog">
              Blog
            </Link>
          </div>
        </div>

        <div className="group-blog-top">
          <div className="left-group">
            <div className="title">GẦN ĐÂY</div>
            <div className="all-left">
              {recentPostList.length > 0 && (
                <div className="main-left">
                  <div className="group-blog">
                    <div className="img">
                      <Link
                        className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                        href={`/blog/${recentPostList[0].slug}`}
                      >
                        <Image
                          objectFit="cover"
                          fill
                          src={recentPostList[0].image}
                          alt={recentPostList[0].title}
                        />
                      </Link>
                    </div>
                    <div className="title-blog">
                      <Link className="text-base" href={`/blog/${recentPostList[0].slug}`}>
                        {recentPostList[0].title}
                      </Link>
                    </div>
                    <div className="content-blog">{recentPostList[0].description}</div>
                    <Link className="more" href={`/blog/${recentPostList[0].slug}`}>
                      Xem thêm
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16669L15.8333 10L10 15.8334"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
              <div className="all-bottom-left">
                <div className="bottom-left">
                  {recentPostList.slice(1).map((post, index) => (
                    <div className="group-blog" key={index}>
                      <div className="img">
                        <Link
                          className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                          href={`/blog/${post.slug}`}
                        >
                          <Image objectFit="cover" fill src={post.image} alt={post.title} />
                        </Link>
                      </div>
                      <div className="title-blog">
                        <Link className="text-base" href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </div>
                      <div className="content-blog">{post.description}</div>
                      <Link className="more" href={`/blog/${post.slug}`}>
                        Xem thêm
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#FA6338"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 4.16669L15.8333 10L10 15.8334"
                            stroke="#FA6338"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="right-group">
            <div className="title">PHỔ BIẾN</div>
            <div className="all-gr">
              {popularPostList.map((post, index) => (
                <div className="group-blog" key={index}>
                  <div className="img">
                    <Link
                      className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                      href={`/blog/${post.slug}`}
                    >
                      <Image objectFit="cover" src={post.image} alt={post.title} fill />
                    </Link>
                  </div>
                  <div className="right-item">
                    <div className="head">
                      <div className="title-blog">
                        <Link className="text-base" href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </div>
                      <div className="content-blog">{post.description}</div>
                    </div>
                    <Link className="more" href={`/blog/${post.slug}`}>
                      Xem thêm
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16669L15.8333 10L10 15.8334"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-container">
          <div className="title">
            <Link className="text-base" href="/category/kien-thuc-ve-thoi-trang">
              KIẾN THỨC THỜI TRANG
            </Link>
          </div>
          <div className="main-group-blog">
            <div className="left-main">
              {fashionKnowledgeList.length > 0 && (
                <div className="group-blog">
                  <div className="img">
                    <Link
                      className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                      href={`/blog/${fashionKnowledgeList[0].slug}`}
                    >
                      <Image
                        objectFit="cover"
                        fill
                        src={fashionKnowledgeList[0].image}
                        alt={fashionKnowledgeList[0].title}
                      />
                    </Link>
                  </div>
                  <div className="title-blog">
                    <Link className="text-base" href={`/blog/${fashionKnowledgeList[0].slug}`}>
                      {fashionKnowledgeList[0].title}
                    </Link>
                  </div>
                  <div className="content-blog">{fashionKnowledgeList[0].description}</div>
                  <Link className="more" href={`/blog/${fashionKnowledgeList[0].slug}`}>
                    Xem thêm
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16602 10H15.8327"
                        stroke="#FA6338"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.16669L15.8333 10L10 15.8334"
                        stroke="#FA6338"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
            <div className="right-main">
              <div className="all-gr">
                {fashionKnowledgeList.slice(1).map((post, index) => (
                  <div className="group-blog" key={index}>
                    <div className="img">
                      <Link
                        className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                        href={`/blog/${post.slug}`}
                      >
                        <Image objectFit="cover" fill src={post.image} alt={post.title} />
                      </Link>
                    </div>
                    <div className="title-blog">
                      <Link className="text-base" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </div>
                    <Link className="more" href={`/blog/${post.slug}`}>
                      Xem thêm
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16669L15.8333 10L10 15.8334"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="blog-container">
          <div className="title">
            <Link className="text-base" href="/category/meo-mac-dep">
              MẸO PHỐI ĐỒ
            </Link>
          </div>
          <div className="main-group-blog">
            <div className="left-main">
              {mixFashionTipList.length > 0 && (
                <div className="group-blog">
                  <div className="img">
                    <Link
                      className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                      href={`/blog/${mixFashionTipList[0].slug}`}
                    >
                      <Image
                        objectFit="cover"
                        fill
                        src={mixFashionTipList[0].image}
                        alt={mixFashionTipList[0].title}
                      />
                    </Link>
                  </div>
                  <div className="title-blog">
                    <Link className="text-base" href={`/blog/${mixFashionTipList[0].slug}`}>
                      {mixFashionTipList[0].title}
                    </Link>
                  </div>
                  <div className="content-blog">{mixFashionTipList[0].description}</div>
                  <Link className="more" href={`/blog/${mixFashionTipList[0].slug}`}>
                    Xem thêm
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16602 10H15.8327"
                        stroke="#FA6338"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.16669L15.8333 10L10 15.8334"
                        stroke="#FA6338"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
            <div className="right-main">
              <div className="all-gr">
                {mixFashionTipList.slice(1).map((post, index) => (
                  <div className="group-blog" key={index}>
                    <div className="img">
                      <Link
                        className="tw-relative tw-inline-block tw-h-full tw-w-full tw-text-base"
                        href={`/blog/${post.slug}`}
                      >
                        <Image objectFit="cover" fill src={post.image} alt={post.title} />
                      </Link>
                    </div>
                    <div className="title-blog">
                      <Link className="text-base" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </div>
                    <Link className="more" href={`/blog/${post.slug}`}>
                      Xem thêm
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16669L15.8333 10L10 15.8334"
                          stroke="#FA6338"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPage.getLayout = getAppLayout;
export default BlogPage;
