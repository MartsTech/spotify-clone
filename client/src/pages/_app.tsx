import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { store, StoreContext } from "stores/store";
import "tailwindcss/tailwind.css";
import { defaultSEO } from "utils/seo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
};

export default App;
