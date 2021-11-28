import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import SidebarPlaylist from "./components/SidebarPlaylist";

const SidebarPlaylists = () => {
  const { playlists, selectPlaylist } = useStore().playlistStore;

  return (
    <>
      {playlists.map((playlist) => (
        <SidebarPlaylist
          key={playlist.id}
          title={playlist.name}
          onClick={() => selectPlaylist(playlist)}
        />
      ))}
    </>
  );
};

export default observer(SidebarPlaylists);
