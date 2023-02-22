import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../src/styles/theme/layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, ...props }: AppPropsWithLayout) {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
