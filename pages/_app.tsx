import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";
import { ReactElement, ReactNode } from "react";
import { Layout } from "../src/styles/theme/layout";
import { wrapper } from "../src/store";
import { Provider } from "react-redux";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
      <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>
    </Provider>
  );
}

export default MyApp;
