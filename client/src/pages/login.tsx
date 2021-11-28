import Login from "modules/login";
import type { NextPage } from "next";
import Head from "next/head";
import { getProviders } from "next-auth/react";
import type { AuthProviders } from "types/auth";
import { useStore } from "stores/store";
import { useEffect } from "react";

interface LoginPageProps {
  providers: AuthProviders | null;
}

const LoginPage: NextPage<LoginPageProps> = ({ providers }) => {
  const { setProviders } = useStore().authStore;

  useEffect(() => {
    if (providers) {
      setProviders(providers);
    }
  }, [providers, setProviders]);

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
