import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PlaylistSong from "./components/PlaylistSong";

const PlaylistSongs = () => {
  const { selectedPlaylistTracks } = useStore().playlistStore;

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28">
      {selectedPlaylistTracks.map(({ track }, index) => (
        <PlaylistSong key={track.id} track={track} order={index + 1} />
      ))}
    </div>
  );
};

export default observer(PlaylistSongs);
