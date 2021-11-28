import { makeAutoObservable } from "mobx";
import { store } from "./store";

class PlaylistStore {
  playlists: SpotifyApi.PlaylistObjectSimplified[] = [];
  selectedPlaylist: SpotifyApi.PlaylistObjectSimplified | null = null;

  get playlistCount() {
    return this.playlists.length;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setPlaylists = (playlists: SpotifyApi.PlaylistObjectSimplified[]) => {
    this.playlists = playlists;
    this.selectedPlaylist = playlists[0];
    store.commonStore.setAppLoading(false);
  };

  selectPlaylist = (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    this.selectedPlaylist = playlist;
  };
}

export default PlaylistStore;
