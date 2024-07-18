import React from 'react';
import Head from 'next/head';

interface MetaProps {
  meta_og_url?: string;
  meta_description?: string;
  meta_og_image?: string;
  meta_og_title?: string;
  meta_keywords?: string;
  meta_canonical?: string;
  meta_amphtml?: string;
}
function Meta({
  meta_og_url,
  meta_description,
  meta_og_image,
  meta_og_title,
  meta_keywords,
  meta_canonical,
  meta_amphtml,
}: MetaProps) {
  return (
    <Head>
      <title>{meta_og_title ?? 'Thiều Hoa - Xu Hướng Phái Đẹp'}</title>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="vi" />
      <meta property="og:site_name" content="Thiều Hoa - Xu Hướng Phái Đẹp" />
      {meta_og_url && <meta property="og:url" content={meta_og_url} />}
      {meta_og_title && <meta property="og:title" content={meta_og_title} />}
      {meta_description && <meta name="description" content={meta_description} />}
      {meta_description && <meta property="og:description" content={meta_description} />}
      {meta_og_image && <meta property="og:image" content={meta_og_image} />}
      {meta_keywords && <meta name="keywords" content={meta_keywords} />}
      {meta_canonical && <link rel="canonical" href={meta_canonical} />}
      {meta_amphtml && <link rel="amphtml" href={meta_amphtml} />}
    </Head>
  );
}

export default Meta;
