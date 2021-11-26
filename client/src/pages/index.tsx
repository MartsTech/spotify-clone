import Home from "modules/home";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;