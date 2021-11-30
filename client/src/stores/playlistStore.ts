import { makeAutoObservable, reaction } from "mobx";
import spotifyApi from "utils/spotify";
import { store } from "./store";

class PlaylistStore {
  playlists: SpotifyApi.PlaylistObjectSimplified[] = [];
  selectedPlaylist: SpotifyApi.PlaylistObjectSimplified | null = null;
  selectedPlaylistTracks: SpotifyApi.PlaylistTrackObject[] = [];
  tracksRegister: Map<string, SpotifyApi.PlaylistTrackObject[]> = new Map<
    string,
    SpotifyApi.PlaylistTrackObject[]
  >();

  get playlistCount() {
    return this.playlists.length;
  }

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.selectedPlaylist,
      async (playlist) => {
        if (playlist) {
          this.selectedPlaylistTracks = await this.loadPlaylistTracks(
            playlist.id
          );
        }
      }
    );
  }

  setPlaylists = (playlists: SpotifyApi.PlaylistObjectSimplified[]) => {
    this.playlists = playlists;
    this.selectedPlaylist = playlists[0];
    store.commonStore.setAppLoading(false);
  };

  selectPlaylist = (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    this.selectedPlaylist = playlist;
  };

  loadPlaylistTracks = async (id: string) => {
    if (this.tracksRegister.has(id)) {
      return this.tracksRegister.get(id) as SpotifyApi.PlaylistTrackObject[];
    }

    const response = await spotifyApi.getPlaylistTracks(id);
    this.tracksRegister.set(id, response.body.items);

    return response.body.items;
  };
}

export default PlaylistStore;
