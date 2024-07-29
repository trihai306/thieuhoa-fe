import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface ApiResponse<Data> {
  data: Data;
  message: string;
  code: number;
}
export interface SearchQueryType {
  page?: number;
  sort?: string;
  color?: number;
  size?: number;
  price?: number;
}
