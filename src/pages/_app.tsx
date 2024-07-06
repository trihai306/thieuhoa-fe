import { ReactElement } from 'react';
import { Provider } from 'react-redux';

import AppContextProvider from '@/contexts/AppContext';
import { store } from '@/redux';
import ApiProvider from '@/services';
import { AppPropsWithLayout } from '@/types';

import '@/styles/core/master.scss';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <AppContextProvider>
      <Provider store={store}>
        <ApiProvider>{getLayout(<Component {...pageProps} />)}</ApiProvider>
      </Provider>
    </AppContextProvider>
  );
};
export default App;
