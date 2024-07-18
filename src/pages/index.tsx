import { isMobile } from 'react-device-detect';
import { GetServerSideProps } from 'next';

import Block from '@/components/home-components/Block';
import BottomBanner from '@/components/home-components/BottomBanner';
import Category from '@/components/home-components/Category';
import CategoryProduct from '@/components/home-components/CategoryProduct';
import FormSearch from '@/components/home-components/FormSearch';
import HomeSlider from '@/components/home-components/HomeSlider';
import Voucher from '@/components/home-components/Voucher';
import { getAppLayout } from '@/components/layouts/AppLayout';
import Meta from '@/components/Meta';
import { pagesService } from '@/services/pages.service';
import { NextPageWithLayout } from '@/types';
import { ResponseHomePageType } from '@/types/home';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await pagesService.home();
  return {
    props: {
      data,
    },
  };
};
interface HomeProps {
  data: ResponseHomePageType;
}

const Home: NextPageWithLayout = ({ data }: HomeProps) => {
  return (
    <div id="content-homepage">
      <Meta {...data.metaData} />
      <HomeSlider items={data.banners} isMobile={isMobile} />
      <FormSearch />
      <Category />
      <Voucher vouchers={data.dataVoucher} />
      <Block blocks={data.block} />
      <CategoryProduct categoryData={data.categoryData} />
      <BottomBanner />
    </div>
  );
};
Home.getLayout = getAppLayout;

export default Home;
