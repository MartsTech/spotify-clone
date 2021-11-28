import { useEffect } from "react";
import { useStore } from "stores/store";
import type { AuthProviders } from "types/auth";

const useSetProviders = (providers: AuthProviders | null) => {
  const { setProviders } = useStore().authStore;

  useEffect(() => {
    if (providers) {
      setProviders(providers);
    }
  }, [providers, setProviders]);
};

export default useSetProviders;
