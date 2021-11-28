import useBannerColor from "hooks/usePlaylistCoverColor";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const PlaylistCover = () => {
  const { selectedPlaylist } = useStore().playlistStore;
  const [color] = useBannerColor(selectedPlaylist);

  return (
    <section
      className={`flex items-end space-x-7 bg-gradient-to-b
      to-black from-indigo-500 ${color} h-80 text-white p-8 w-full`}
    >
      <img
        className="h-44 w-44 shadow-2xl"
        src={selectedPlaylist?.images[0].url}
        loading="lazy"
        alt="cover"
      />
      <div>
        <p>Playlist</p>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
          {selectedPlaylist?.name}
        </h1>
      </div>
    </section>
  );
};

export default observer(PlaylistCover);
