import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";
import { ReactElement, ReactNode } from "react";
import { Layout } from "../src/styles/theme/layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, ...props }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>;
}

export default MyApp;
