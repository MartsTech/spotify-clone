import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const PlayerInfo = () => {
  const { selectedTrack } = useStore().playlistStore;

  return (
    <div className="flex items-center space-x-4">
      <img
        className="hidden md:inline h-10 w-10"
        loading="lazy"
        src={selectedTrack?.album.images[0].url}
        alt="album"
      />
      <div>
        <h3>{selectedTrack?.name}</h3>
        <p>{selectedTrack?.artists[0].name}</p>
      </div>
    </div>
  );
};

export default observer(PlayerInfo);
