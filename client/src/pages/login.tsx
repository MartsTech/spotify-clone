import Login from "modules/login";
import type { NextPage } from "next";
import Head from "next/head";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Login</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
