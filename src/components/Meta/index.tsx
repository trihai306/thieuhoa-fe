import React from 'react';
import Head from 'next/head';

import { SchemaDataType } from '@/types/seo-schema-type';

interface MetaProps {
  meta_og_url?: string;
  meta_description?: string;
  meta_og_image?: string;
  meta_og_title?: string;
  meta_keywords?: string;
  meta_canonical?: string;
  meta_amphtml?: string;
  schemaData?: Record<string, SchemaDataType>;
}
const LOCAL_BISINESS_SCHEMA: SchemaDataType = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Thiều Hoa | Thời Trang Nữ - Thời Trang Trung Niên',
  url: 'https://thieuhoa.com.vn',
  '@id': 'https://thieuhoa.com.vn',
  logo: 'https://thieuhoa.com.vn/v2/img/logo-web.svg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '254 Cô Bắc',
    addressLocality: 'Phường Cô Giang, Quận 1',
    addressRegion: 'Thành Phố Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'Việt Nam',
  },
  alternateName: 'Thiều Hoa',
  areaServed: 'VietNam',
  correctionsPolicy: 'https://thieuhoa.com.vn/chinh-sach-bao-mat-thong-tin',
  description:
    'Thiều Hoa tự hào là Thương hiệu tiên phong về thời trang Nữ - thời trang Trung Niên tại Việt Nam với kim chỉ nam luôn lấy chất lượng làm đầu',
  disambiguatingDescription:
    'thời trang, thời trang nữ,thời trang trung niên, khăng choàng cổ, giày dép',
  email: 'info@thieuhoa.com.vn',
  foundingDate: '2020-02-24',
  hasMap:
    'https://www.google.com/maps/place/Th%E1%BB%9Di+Trang+Trung+Ni%C3%AAn+Thi%E1%BB%81u+Hoa+-+V%C3%A1y+%C4%90%E1%BA%A7m+Trung+Ni%C3%AAn/@10.7625687,106.6915009,15z/data=!4m16!1m9!3m8!1s0x31752fed2fa9d2d1:0x9090ef6dc2bf9c28!2zVGjhu51pIFRyYW5nIFRydW5nIE5pw6puIFRoaeG7gXUgSG9hIC0gVsOheSDEkOG6p20gVHJ1bmcgTmnDqm4!8m2!3d10.7631526!4d106.6926204!9m1!1b1!16s%2Fg%2F11gy2r1wsh!3m5!1s0x31752fed2fa9d2d1:0x9090ef6dc2bf9c28!8m2!3d10.7631526!4d106.6926204!16s%2Fg%2F11gy2r1wsh?entry=ttu',
  image: 'https://thieuhoa.com.vn/v2/img/logo-web.svg',
  longitude: '106.6900455',
  latitude: '10.7631579',
  legalName: 'Công Ty Cổ Phần Thời Trang TH',
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '254 Cô Bắc',
      addressLocality: 'Phường Cô Giang, Quận 1',
      addressRegion: 'Thành Phố Hồ Chí Minh',
      postalCode: '700000',
      addressCountry: 'Việt Nam',
    },
  },
  mainEntityOfPage: 'https://thieuhoa.com.vn/gioi-thieu-thieu-hoa',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
  ],
  priceRange: '$',
  telephone: '+84898348368',
  taxID: '0316099570',
  unnamedSourcesPolicy: 'https://thieuhoa.com.vn/chinh-sach-thanh-vien',
  vatID: '0316099570',
  sameAs: [
    'https://www.facebook.com/thieuhoavn',
    'https://zalo.me/388030919384134642',
    'https://www.instagram.com/thieuhoavn/',
    'https://twitter.com/thieuhoa254',
    'https://www.tiktok.com/@thieuhoafashion',
  ],
};
function Meta({
  meta_og_url,
  meta_description,
  meta_og_image,
  meta_og_title,
  meta_keywords,
  meta_canonical,
  meta_amphtml,
  schemaData,
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
      <script type="application/ld+json">{JSON.stringify(LOCAL_BISINESS_SCHEMA, null, 2)}</script>
      {schemaData &&
        Object.keys(schemaData).map((itemSchema) => {
          return (
            <script key={itemSchema} type="application/ld+json">
              {JSON.stringify(schemaData[itemSchema], null, 2)}
            </script>
          );
        })}
    </Head>
  );
}

export default Meta;
