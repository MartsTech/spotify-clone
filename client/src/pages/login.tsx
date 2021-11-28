import Login from "modules/login";
import type { NextPage } from "next";
import Head from "next/head";
import { getProviders } from "next-auth/react";
import useSetProviders from "hooks/useSetProviders";
import type { AuthProviders } from "types/auth";

interface LoginPageProps {
  providers: AuthProviders | null;
}

const LoginPage: NextPage<LoginPageProps> = ({ providers }) => {
  useSetProviders(providers);

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

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
