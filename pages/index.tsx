/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const HomePageWithNoSSR = dynamic(() => import("./home/home"), {
  ssr: false,
});

const Home: NextPage = () => (
  <>
    <Head>
      <title>MusicCloud</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePageWithNoSSR />
  </>
);

export default Home;
