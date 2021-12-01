import { debounce } from "lodash";
import { makeAutoObservable, reaction, runInAction } from "mobx";
import spotifyApi from "utils/spotify";
import { store } from "./store";

class PlaylistStore {
  playlists: SpotifyApi.PlaylistObjectSimplified[] = [];
  selectedPlaylist: SpotifyApi.PlaylistObjectSimplified | null = null;
  tracksRegister: Map<string, SpotifyApi.PlaylistTrackObject[]> = new Map<
    string,
    SpotifyApi.PlaylistTrackObject[]
  >();
  selectedPlaylistTracks: SpotifyApi.PlaylistTrackObject[] = [];
  selectedTrack: SpotifyApi.TrackObjectFull | null = null;
  isPlaying = false;
  volume = 50;

  get playlistCount() {
    return this.playlists.length;
  }

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.selectedPlaylist,
      async (playlist) => {
        if (playlist) {
          this.setTracks(playlist);
        }
      }
    );

    reaction(
      () => this.volume,
      (volume) => {
        this.debouncedAdjestVolume(volume);
      }
    );
  }

  resetStore = () => {
    this.playlists = [];
    this.selectedPlaylist = null;
    this.tracksRegister.clear();
    this.selectedPlaylistTracks = [];
    this.selectedTrack = null;
    this.isPlaying = false;
    this.volume = 50;
  };

  setPlaylists = (playlists: SpotifyApi.PlaylistObjectSimplified[]) => {
    this.playlists = playlists;
    this.selectedPlaylist = playlists[0];
    store.commonStore.setAppLoading(false);
  };

  selectPlaylist = (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    this.selectedPlaylist = playlist;
  };

  setTracks = async (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    if (!playlist) return;

    const tracks = await this.loadPlaylistTracks(playlist.id);

    runInAction(() => {
      this.selectedPlaylistTracks = tracks;
    });
  };

  loadPlaylistTracks = async (id: string) => {
    if (this.tracksRegister.has(id)) {
      return this.tracksRegister.get(id) as SpotifyApi.PlaylistTrackObject[];
    }

    const response = await spotifyApi.getPlaylistTracks(id);
    this.tracksRegister.set(id, response.body.items);

    return response.body.items;
  };

  loadCurrentTrack = async () => {
    const track = await spotifyApi.getMyCurrentPlayingTrack();
    const state = await spotifyApi.getMyCurrentPlaybackState();

    runInAction(() => {
      this.selectedTrack = track.body?.item as SpotifyApi.TrackObjectFull;
      this.isPlaying = state.body?.is_playing;
      this.volume = 50;
    });
  };

  playTrack = (track: SpotifyApi.TrackObjectFull) => {
    this.selectedTrack = track;
    this.isPlaying = true;

    spotifyApi.play({
      uris: [track.uri],
    });
  };

  skipToPreviousTrack = async () => {
    await spotifyApi.skipToPrevious();
    await this.loadCurrentTrack();
  };

  skipToNextTrack = async () => {
    await spotifyApi.skipToNext();
    await this.loadCurrentTrack();
  };

  handlePlayPause = async () => {
    if (this.isPlaying) {
      await spotifyApi.pause();
    } else {
      await spotifyApi.play();
    }

    runInAction(() => {
      this.isPlaying ? (this.isPlaying = false) : (this.isPlaying = true);
    });
  };

  setVolume = (volume: number) => {
    this.volume = volume;
  };

  private debouncedAdjestVolume = debounce((volume: number) => {
    spotifyApi.setVolume(volume);
  }, 500);
}

export default PlaylistStore;
