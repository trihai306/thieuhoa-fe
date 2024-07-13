import React, { PropsWithChildren } from 'react';
import { isMobile } from 'react-device-detect';
import NoSSR from 'react-no-ssr';

import { createLayout } from '@/utils';

import Footer from './Footer';
import FooterMobi from './FooterMobi';
import Header from './Header';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <NoSSR>{isMobile ? <FooterMobi /> : <Footer />}</NoSSR>
    </div>
  );
};

export default AppLayout;

export const getAppLayout = createLayout(AppLayout);
