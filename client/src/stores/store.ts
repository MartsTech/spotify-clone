import { createContext, useContext } from "react";
import AuthStore from "./authStore";

interface Store {
  authStore: AuthStore;
}

export const store: Store = {
  authStore: new AuthStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
