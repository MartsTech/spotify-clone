import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { store, StoreContext } from "stores/store";
import "tailwindcss/tailwind.css";
import { defaultSEO } from "utils/seo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreContext.Provider value={store}>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
      </StoreContext.Provider>
    </SessionProvider>
  );
};

export default App;
