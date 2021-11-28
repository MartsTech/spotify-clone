import useLoadPlaylists from "hooks/useLoadPlaylists";
import { observer } from "mobx-react-lite";
import Home from "modules/home";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  useLoadPlaylists();

  return (
    <>
      <Head>
        <title>Spotify Clone - Home</title>
      </Head>
      <Home />
    </>
  );
};

export default observer(HomePage);
