import React, { PropsWithChildren, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Toaster } from 'react-hot-toast';
import NoSSR from 'react-no-ssr';
import { useRouter } from 'next/router';

import { createLayout } from '@/utils';

import ListIcon from '../ListIcon';
import Preloader from '../Preloader';

import Footer from './Footer';
import FooterMobi from './FooterMobi';
import Header from './Header';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Clean up the event listeners when the component unmounts
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);
  return (
    <div>
      <Toaster />
      {loading && <Preloader />}
      <Header />
      <main>{children}</main>
      <Footer />
      <NoSSR>{isMobile && <FooterMobi />}</NoSSR>
      <ListIcon />
    </div>
  );
};

export default AppLayout;

export const getAppLayout = createLayout(AppLayout);
