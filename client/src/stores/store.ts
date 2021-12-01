import { createContext, useContext } from "react";
import AuthStore from "./authStore";
import CommonStore from "./commonStore";
import PlaylistStore from "./playlistStore";

interface Store {
  commonStore: CommonStore;
  authStore: AuthStore;
  playlistStore: PlaylistStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  authStore: new AuthStore(),
  playlistStore: new PlaylistStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { commonStore, authStore, playlistStore } = store;

  commonStore.resetStore();
  authStore.resetStore();
  playlistStore.resetStore();
};
