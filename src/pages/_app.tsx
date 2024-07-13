import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';

import AppContextProvider from '@/contexts/AppContext';
import { store } from '@/redux';
import ApiProvider from '@/services';
import { AppPropsWithLayout } from '@/types';

import '@/styles/core/master.scss';
import '@/styles/globals.scss';
import '@/styles/core/homepage.scss';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <AppContextProvider>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <ApiProvider>{getLayout(<Component {...pageProps} />)}</ApiProvider>
      </Provider>
    </AppContextProvider>
  );
};
export default App;
