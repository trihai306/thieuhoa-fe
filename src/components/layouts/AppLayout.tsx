import React, { PropsWithChildren } from 'react';

import { createLayout } from '@/utils';

import Footer from './Footer';
import Header from './Header';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;

export const getAppLayout = createLayout(AppLayout);
